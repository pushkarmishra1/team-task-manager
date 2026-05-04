<<<<<<< HEAD
# Team Task Manager

A full-stack web app for managing team tasks with role-based access.

## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js + Express
- Database: MongoDB with Mongoose
- Auth: JWT

## Setup

1. Clone the repository.
2. Set up MongoDB (local or cloud like MongoDB Atlas).

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file by copying `.env.example`:
   ```
   cp .env.example .env
   ```
4. Edit `.env` with your MongoDB URI, JWT secret, and port.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

### Development

1. Start the backend:
   ```
   cd backend
   npm run dev
   ```
2. Start the frontend:
   ```
   cd frontend
   npm run dev
   ```

The backend will run on `http://localhost:5000` and frontend on `http://localhost:5173`.

### Production

1. Build the frontend:
   ```
   cd frontend
   npm run build
   ```
2. Start the backend:
   ```
   cd backend
   npm start
   ```

## Deployment

### Backend on Railway

1. Push backend code to GitHub.
2. Connect Railway to your GitHub repo.
3. Set environment variables in Railway dashboard: `MONGODB_URI`, `JWT_SECRET`, `PORT`.
4. Deploy.

### Frontend

Deploy the built files to any static hosting service like Vercel, Netlify, or GitHub Pages.

Update the API base URL in `src/services/api.js` to the deployed backend URL.

## Features

- User registration and login
- Role-based access (Admin, Member)
- Project management (Admin only)
- Task creation and assignment (Admin only)
- Task status updates (Members for their tasks)
- View all tasks and overdue tasks
=======
# team-task-manager
>>>>>>> 17adb5133200e112574633d3b9b2406c7ab98250
