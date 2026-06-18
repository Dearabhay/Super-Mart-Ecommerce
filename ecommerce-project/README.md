# ⚙️ Super Mart — Backend

[![Node.js](https://img.shields.io/badge/Node.js-ESM-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Sequelize-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

The backend REST API of **Super Mart** — built with Node.js, Express, and Sequelize ORM connected to PostgreSQL.

---

## 🚀 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Node.js (ESM) | >= 18 | Runtime |
| Express | ^4.21.2 | REST API Framework |
| Sequelize | ^6.6.5 | ORM for DB operations |
| PostgreSQL (pg) | ^8.16.0 | Primary Database |
| MySQL2 | ^3.14.1 | MySQL support |
| CORS | ^2.8.5 | Cross-Origin Requests |
| Nodemon | ^3.1.9 | Dev hot reload |

---

## 📁 Folder Structure

```
backend/
├── server.js             # Entry point, Express app
├── models/               # Sequelize models
├── routes/               # API route handlers
├── controllers/          # Business logic
├── config/               # DB config / Sequelize init
├── zipFiles.js           # Utility to zip project
└── package.json
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js >= 18
- PostgreSQL installed and running

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=supermart
DB_USER=your_db_user
DB_PASS=your_db_password
```

### 3. Start the Server

```bash
# Development (hot reload)
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start with nodemon (hot reload) |
| `npm start` | Start in production mode |
| `npm run zip` | Zip project files via archiver |

---

## 🗄️ Database

This project uses **PostgreSQL** with **Sequelize ORM**.

- Models are defined in the `models/` directory
- Sequelize handles migrations and associations
- Supports MySQL2 as an alternative driver

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/orders` | Place a new order |
| GET | `/api/orders/:id` | Get order details |

> Add more endpoints as per your implementation.

---

## 🌐 Deployment

Deployed on **Render** as a Web Service.

Set these environment variables in the Render dashboard:

```env
PORT=5000
DB_HOST=...
DB_PORT=5432
DB_NAME=...
DB_USER=...
DB_PASS=...
```

---

## 👨‍💻 Author

**Abhay Kumar**
- GitHub: [@Dearabhay](https://github.com/Dearabhay)
- Portfolio: [dearabhay.vercel.app](https://dearabhay.vercel.app)
- LinkedIn: [linkedin.com/in/dearabhaykumar](https://linkedin.com/in/dearabhaykumar)
