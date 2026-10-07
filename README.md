# 🏢 Nexus ERP — Full-Stack Enterprise Resource Planning Platform

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8-010101?logo=socketdotio&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An enterprise-grade, full-stack **Enterprise Resource Planning (ERP)** and corporate operations management platform designed to streamline human resources, real-time collaboration, project workflows, attendance logs, accounts management, and automated executive report generation.

---

## 📖 Table of Contents
- [✨ Key Modules & Features](#-key-modules--features)
- [🏗️ System Architecture](#️-system-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Monorepo Structure](#-monorepo-structure)
- [🚀 Quick Start & Installation](#-quick-start--installation)
- [🔐 Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
- [📄 Automated PDF & Report Engine](#-automated-pdf--report-engine)
- [👨‍💻 Author](#-author)

---

## ✨ Key Modules & Features

### 1. 🛡️ Executive & Admin Dashboard
- Centralized real-time overview of workforce attendance, project velocity, and financial metrics.
- User lifecycle management with granular role assignment (`Admin`, `Accounts`, `Employee`).
- Real-time audit logs and system activity tracking.

### 2. 👥 Attendance & Workforce Tracking
- Daily punch-in/punch-out with live status verification.
- Monthly timesheet summaries, leave balance calculations, and holiday calendars.
- Automated overtime and late-arrival auditing with cron-based background jobs.

### 3. 💬 Real-Time Collaborative Team Chat
- Bidirectional live chat channels powered by **Socket.IO**.
- Departmental group discussions and private one-on-one direct messaging.
- Online presence badges, instant message notifications, and delivery indicators.

### 4. 📊 Project & Milestone Management
- Kanban-inspired project boards, milestone deadlines, and progress visualizers.
- Dynamic task assignment with priority labels (`Urgent`, `High`, `Medium`, `Low`).
- Team productivity metrics and sprint burn-down tracking.

### 5. 💰 Accounts, Invoicing & Financial Records
- Comprehensive income and expense ledger management.
- Dynamic invoice builder with automatic tax calculation, discounts, and currency formatting.
- Cash-flow charts and category-wise expense breakdown.

### 6. 📑 Automated PDF Report Generation
- Client-side and server-side PDF generation via `jspdf`, `jspdf-autotable`, and `@react-pdf/renderer`.
- One-click export of salary slips, audit statements, and attendance sheets with pixel-perfect styling.

---

## 🏗️ System Architecture

```
┌────────────────────────────────────────────────────────┐
│                   CLIENT (React 19)                    │
│  Tailwind CSS v4 • Framer Motion • Lucide • Socket.io  │
└───────────────────────────┬────────────────────────────┘
                            │ REST APIs (Axios) & WebSockets
                            ▼
┌────────────────────────────────────────────────────────┐
│                   SERVER (Node / Express 5)            │
│  JWT RBAC Middleware • Socket.IO Gateway • Node-Cron   │
└───────────────────────────┬────────────────────────────┘
                            │ Mongoose ODM
                            ▼
┌────────────────────────────────────────────────────────┐
│                   DATABASE (MongoDB Atlas)             │
│   Users • Projects • Tasks • Attendance • Ledgers      │
└────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend (`Client/`)
- **Framework**: React 19, Vite 7
- **Styling**: Tailwind CSS v4, Framer Motion
- **Icons & UI Components**: Lucide React, React Icons, Headless UI
- **Forms & Validation**: React Hook Form
- **Real-Time Client**: Socket.io Client
- **Document Export**: jsPDF, jsPDF-AutoTable, html2canvas, @react-pdf/renderer
- **Feedback & Alerts**: SweetAlert2, React Toastify

### Backend (`Server/`)
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 5.1
- **Database**: MongoDB & Mongoose 8
- **Authentication**: JSON Web Tokens (JWT), Bcrypt.js
- **Real-Time Engine**: Socket.IO 4.8
- **Task Scheduling**: Node-Cron 4.2
- **Utilities**: Moment-Timezone, Dotenv, Cors

---

## 📂 Monorepo Structure

```
ERP/
├── Client/                     # React 19 Single Page Application
│   ├── public/                 # Static assets & icons
│   ├── src/
│   │   ├── components/         # Modular feature components
│   │   │   ├── Admin/          # Admin oversight panels
│   │   │   ├── Attendance/     # Time tracking & clock-in
│   │   │   ├── Chat/           # Realtime Socket.IO chat UI
│   │   │   ├── Login.jsx       # Auth login interface
│   │   │   ├── Project.jsx     # Project board & task tracker
│   │   │   ├── Report.jsx      # Financial & operational reporting
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/              # Role-specific dashboard layouts
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AccountsDashboard.jsx
│   │   │   └── MainDashboard.jsx
│   │   ├── App.jsx             # Route definitions & guards
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Server/                     # Express 5 REST API & WebSocket Backend
│   ├── index.js                # Server entry point & Socket.IO initialization
│   ├── package.json
│   └── ...
└── README.md
```

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js 18+ or 20+
- MongoDB instance (Local or MongoDB Atlas connection URI)
- npm or yarn

### 1. Backend Setup
```bash
cd Server
npm install
```
Create a `.env` file in the `Server/` folder:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/erp_db
JWT_SECRET=your_super_secret_jwt_key
CLIENT_URL=http://localhost:5173
```
Start the backend server:
```bash
npm start
# Server runs on http://localhost:5000
```

### 2. Frontend Setup
```bash
cd ../Client
npm install
npm run dev
# Application accessible at http://localhost:5173
```

---

## 🔐 Role-Based Access Control (RBAC)

| Role | Access Level & Privileges |
| :--- | :--- |
| **Admin** | Full system access: employee onboarding, payroll approvals, audit logs, system configurations |
| **Accounts** | Financial ledger entries, expense verification, salary slips, invoice generation & tax audits |
| **Employee** | Personal dashboard, daily attendance punch, assigned project tasks, and team chat |

---

## 👨‍💻 Author

**Deepak Raj**  
- **GitHub**: [@Deepak8081](https://github.com/Deepak8081)  
- **Email**: deepakraj9454979020@gmail.com  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
