# 🚀 Job Platform API

## 📌 Description

Backend API built with NestJS that allows users to register, login, and access protected routes using JWT authentication.

---

## 🛠 Tech Stack

* NestJS
* PostgreSQL
* TypeORM
* JWT (Authentication)
* bcrypt (Password hashing)

---

## ⚙️ Features

* Create user (with hashed password)
* Login system (JWT)
* Protected routes using Auth Guard
* Get all users (secured)
* Get user by ID (secured)

---

## 🔐 Authentication

* User logs in and receives a JWT token
* Token is required to access protected endpoints

---

## ▶️ Run project

```bash
npm install
npm run start:dev
```

---

## 📡 Endpoints

### 🔓 Public

* POST /user → Register
* POST /user/login → Login

### 🔒 Protected

* GET /user → Get all users
* GET /user/:id → Get user by ID

---

## 📸 Screenshots

(Add your Postman screenshots here)

---

## 🧑‍💻 Author

Riahisamed
