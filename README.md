# 🛒 Super Mart — E-Commerce Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=render)](https://super-mart-ecommerce.onrender.com/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-ESM-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Sequelize-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

A full-stack e-commerce web application with a **React.js** frontend and **Node.js/Express** backend, powered by **PostgreSQL** via Sequelize ORM.

> 🌐 **Live Demo:** [https://super-mart-ecommerce.onrender.com/](https://super-mart-ecommerce.onrender.com/)

---

## 🚀 Tech Stack

### Frontend
| Tech | Version |
|------|---------|
| React | ^19.0.0 |
| React Router | ^7.1.5 |
| Axios | ^1.8.4 |
| Day.js | ^1.11.13 |
| Vite | ^6.1.0 |

### Backend
| Tech | Version |
|------|---------|
| Node.js (ESM) | — |
| Express | ^4.21.2 |
| Sequelize ORM | ^6.6.5 |
| PostgreSQL (pg) | ^8.16.0 |
| MySQL2 | ^3.14.1 |
| CORS | ^2.8.5 |

---

## 📁 Project Structure

```
Super-Mart-Ecommerce/
├── backend/                  # Express REST API
│   ├── server.js             # Entry point
│   ├── package.json
│   └── ...
├── frontend/                 # React + Vite SPA
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── ...
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL running locally or a hosted DB (e.g., Supabase, Neon)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Dearabhay/Super-Mart-Ecommerce.git
cd Super-Mart-Ecommerce
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=supermart
DB_USER=your_db_user
DB_PASS=your_db_password
```

Start the backend server:

```bash
# Development (with hot reload)
npm run dev

# Production
npm start
```

The backend runs on `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend dev server:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173`

---

## 📦 Available Scripts

### Backend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start server with nodemon (hot reload) |
| `npm start` | Start server in production |
| `npm run zip` | Zip project files |

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🧪 Testing

Frontend unit tests are configured with **Vitest** + **React Testing Library**:

```bash
cd frontend
npx vitest
```

---

## 🌐 Deployment

### Frontend
Deploy the `frontend/dist` folder to **Vercel** or **Netlify**:

```bash
cd frontend
npm run build
# Upload dist/ to your hosting provider
```

### Backend
Deploy to **Render**, **Railway**, or any Node.js-compatible platform. Make sure to set environment variables in the platform dashboard.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Abhay Kumar**
- GitHub: [@Dearabhay](https://github.com/Dearabhay)
- Portfolio: [dearabhay.vercel.app](https://dearabhay.vercel.app)
- LinkedIn: [linkedin.com/in/dearabhaykumar](https://linkedin.com/in/dearabhaykumar)

---

## 📄 License

This project is licensed under the **ISC License**.
