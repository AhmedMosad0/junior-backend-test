const express = require("express");
const { body } = require("express-validator");

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

const productValidation = [
  body("name").notEmpty().withMessage("Name is required"),

  body("category")
    .optional()
    .isString()
    .withMessage("Category must be a string"),

  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be positive"),

  body("quantity")
    .isInt({ min: 0 })
    .withMessage("Quantity must be a non-negative integer"),
];

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  productValidation,
  createProduct
);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  productValidation,
  updateProduct
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteProduct
);

module.exports = router;