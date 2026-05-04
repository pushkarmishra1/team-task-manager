# 🚀 Team Task Manager

A full-stack web application to manage team tasks, assign work, and track progress with role-based access control (Admin/Member).

---

## 🌐 Live Demo

👉 https://team-task-manager-opal-ten.vercel.app

---

## 📌 Features

* 🔐 **Authentication (JWT)**

  * User Signup & Login
  * Secure token-based authentication

* 📝 **Task Management**

  * Create, assign, and manage tasks
  * Track task status and deadlines

* 📊 **Dashboard**

  * View all tasks
  * Track overdue tasks

* 👥 **Role-Based Access**

  * Admin and Member roles
  * Controlled access to features

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

### Deployment

* Frontend: Vercel
* Backend: Railway

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/pushkarmishra1/team-task-manager.git
cd team-task-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5001
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | /api/auth/register | Register user   |
| POST   | /api/auth/login    | Login user      |
| GET    | /api/tasks         | Get all tasks   |
| POST   | /api/tasks         | Create new task |

---

## 📸 Demo

> Add your demo video link here (2–5 min walkthrough)

---

## 📂 Project Structure

```
team-task-manager/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── public/
│
└── README.md
```

---

## 🧠 Future Improvements

* Project management UI
* Better role-based restrictions
* Notifications & reminders
* Improved UI/UX

---

## 👨‍💻 Author

**Pushkar Mishra**
GitHub: https://github.com/pushkarmishra1
