const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTaskStatus } = require('../controllers/taskController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.post('/', auth, role(['Admin']), createTask);
router.get('/', auth, getTasks);
router.put('/status', auth, updateTaskStatus);

module.exports = router;