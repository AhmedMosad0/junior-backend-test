# Product Inventory API

A simple RESTful API built with Node.js and Express.js for managing products in an inventory system.

This project includes:

- JWT Authentication
- Admin Authorization Middleware
- Product CRUD Operations
- Express Validator Validation
- MongoDB Atlas Integration
- Pagination Support

---

# Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- dotenv

---

# Project Structure

```bash
├── controllers
│   ├── authController.js
│   └── productController.js
├── middleware
│   ├── adminMiddleware.js
│   └── authMiddleware.js
├── models
│   ├── Product.js
│   └── User.js
├── routes
│   ├── authRoutes.js
│   └── productRoutes.js
├── app.js
├── package.json
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/AhmedMosad0/junior-backend-test.git
```

Go to the project folder:

```bash
cd junior-backend-test
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000

MONGO_URI=mongodb+srv://ahmedneinaa00_db_user:0kpVdBAgAzQ8c2ms@cluster0.ykjyo6c.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=mysecretkey
```

---

# Running The Project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

# Base URL

```txt
http://localhost:5000
```

---

# Authentication

## Login

### Request

```http
POST /auth/login
```

### Request Body

```json
{
  "username": "admin",
  "password": "admin123"
}
```

### Response

```json
{
  "token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMGY0ZjMwNjAyNTgyMTBmNmY1MTU1NCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3OTM4ODQyNCwiZXhwIjoxNzc5NDc0ODI0fQ.NoNOQayWtJe9b2pECj_E8MNnpd_v_fwopEE_TlOB7rU
}
```

---

# Products API

## Create Product

### Request

```http
POST /products
```

### Headers

```txt
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMGY0ZjMwNjAyNTgyMTBmNmY1MTU1NCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3OTM4ODQyNCwiZXhwIjoxNzc5NDc0ODI0fQ.NoNOQayWtJe9b2pECj_E8MNnpd_v_fwopEE_TlOB7rU
```

### Request Body

```json
{
  "name": "Laptop",
  "category": "Electronics",
  "price": 1000,
  "quantity": 5
}
```

---

## Get All Products

### Request

```http
GET /products
```

### Pagination Example

```http
GET /products?page=1
```

---

## Get Single Product

### Request

```http
GET /products/:id
```

---

## Update Product

### Request

```http
PUT /products/:id
```

### Headers

```txt
Authorization:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMGY0ZjMwNjAyNTgyMTBmNmY1MTU1NCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3OTM4ODQyNCwiZXhwIjoxNzc5NDc0ODI0fQ.NoNOQayWtJe9b2pECj_E8MNnpd_v_fwopEE_TlOB7rU
```

### Request Body

```json
{
  "name": "Gaming Laptop",
  "category": "Electronics",
  "price": 1500,
  "quantity": 3
}
```

---

## Delete Product

### Request

```http
DELETE /products/:id
```

### Headers

```txt
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMGY0ZjMwNjAyNTgyMTBmNmY1MTU1NCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3OTM4ODQyNCwiZXhwIjoxNzc5NDc0ODI0fQ.NoNOQayWtJe9b2pECj_E8MNnpd_v_fwopEE_TlOB7rU
```

---

# Validation Rules

- `name` is required
- `category` must be a string
- `price` must be a positive number
- `quantity` must be a non-negative integer

---

# SQL Query

```sql
SELECT *
FROM products
WHERE price BETWEEN 50 AND 200
ORDER BY price ASC
LIMIT 10 OFFSET 0;
```

---

# MongoDB Query

```javascript
Product.find({ category: "Electronics" })
  .sort({ price: -1 })
  .limit(5)
  .skip(0);
```

---

# Query Optimization

- Add indexes on frequently searched fields
- Use pagination to limit returned data
- Cache frequently requested data
- Avoid unnecessary database queries

---

# Notes

- Protected routes require a valid JWT token.
- Only users with the `admin` role can create, update, or delete products.

---

# Author

Ahmed Mosad
