require("dotenv").config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const express = require('express');
const mongoose = require("mongoose");
// const connectDB = require("./config/db");
mongoose.connect(process.env.MONGO_URI)
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));