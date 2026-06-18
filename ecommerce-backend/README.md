# 🛍️ Super Mart — Frontend

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=render)](https://super-mart-ecommerce.onrender.com/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

The frontend of **Super Mart** — a fast, responsive e-commerce SPA built with React 19 and Vite.

> 🌐 **Live Demo:** [https://super-mart-ecommerce.onrender.com/](https://super-mart-ecommerce.onrender.com/)

---

## 🚀 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| React | ^19.0.0 | UI Framework |
| React Router | ^7.1.5 | Client-side Routing |
| Axios | ^1.8.4 | HTTP Requests to Backend API |
| Day.js | ^1.11.13 | Date Formatting |
| Vite | ^6.1.0 | Build Tool & Dev Server |
| Vitest | ^3.1.2 | Unit Testing |
| React Testing Library | ^16.3.0 | Component Testing |

---

## 📁 Folder Structure

```
frontend/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level pages
│   ├── App.jsx           # Root component & routes
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js >= 18

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Environment

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Dev Server

```bash
npm run dev
```

App runs on `http://localhost:5173`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🧪 Testing

Tests are written with **Vitest** + **React Testing Library**:

```bash
npx vitest
```

---

## 🌐 Deployment

Build and deploy the `dist/` folder to **Vercel**, **Netlify**, or **Render**:

```bash
npm run build
# Deploy the dist/ folder
```

Set this environment variable on your hosting platform:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

---

## 👨‍💻 Author

**Abhay Kumar**
- GitHub: [@Dearabhay](https://github.com/Dearabhay)
- Portfolio: [dearabhay.vercel.app](https://dearabhay.vercel.app)
- LinkedIn: [linkedin.com/in/dearabhaykumar](https://linkedin.com/in/dearabhaykumar)
