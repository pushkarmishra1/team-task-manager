const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { name, members } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Project name is required' });
  }
  try {
    const project = new Project({
      name,
      members: members || [],
      createdBy: req.user._id,
    });
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ $or: [{ createdBy: req.user._id }, { members: req.user._id }] }).populate('members', 'name email').populate('createdBy', 'name');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addMember = async (req, res) => {
  const { projectId, userId } = req.body;
  try {
    const project = await Project.findById(projectId);
    if (!project || project.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    if (!project.members.includes(userId)) {
      project.members.push(userId);
      await project.save();
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};