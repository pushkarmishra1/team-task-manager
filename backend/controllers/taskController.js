const Task = require('../models/Task');
const Project = require('../models/Project');

exports.createTask = async (req, res) => {
  const { title, description, assignedTo, project, deadline } = req.body;
  if (!title || !description || !assignedTo || !project || !deadline) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const task = new Task({
      title,
      description,
      assignedTo,
      project,
      deadline,
    });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const projects = await Project.find({ members: req.user._id }).select('_id');
    const projectIds = projects.map(p => p._id);
    const tasks = await Task.find({ $or: [{ assignedTo: req.user._id }, { project: { $in: projectIds } }] }).populate('assignedTo', 'name _id').populate('project', 'name');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTaskStatus = async (req, res) => {
  const { taskId, status } = req.body;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    if (task.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    task.status = status;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};