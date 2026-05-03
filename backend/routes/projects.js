const express = require('express');
const router = express.Router();
const { createProject, getProjects, addMember } = require('../controllers/projectController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.post('/', auth, role(['Admin']), createProject);
router.get('/', auth, getProjects);
router.post('/add-member', auth, role(['Admin']), addMember);

module.exports = router;