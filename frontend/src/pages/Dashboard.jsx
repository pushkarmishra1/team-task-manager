import { useState, useEffect } from 'react';
import api from '../services/api';

function Dashboard({ user, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', assignedTo: '', project: '', deadline: '' });

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await api.get('/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks', newTask);
      setNewTask({ title: '', description: '', assignedTo: '', project: '', deadline: '' });
      fetchTasks();
    } catch (err) {
      alert('Failed to create task');
    }
  };

  const handleUpdateStatus = async (taskId, status) => {
    try {
      await api.put('/tasks/status', { taskId, status });
      fetchTasks();
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const overdueTasks = tasks.filter(task => new Date(task.deadline) < new Date() && task.status !== 'Done');

  return (
    <div className="container">
      <header>
        <h2>Dashboard</h2>
        <button onClick={onLogout}>Logout</button>
      </header>
      <div className="dashboard">
        <div className="tasks">
          <h3>All Tasks</h3>
          {tasks.map(task => (
            <div key={task._id} className="task">
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p>Assigned to: {task.assignedTo.name}</p>
              <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
              {user.role === 'Member' && task.assignedTo._id === user.id && (
                <select value={task.status} onChange={(e) => handleUpdateStatus(task._id, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              )}
            </div>
          ))}
        </div>
        <div className="overdue">
          <h3>Overdue Tasks</h3>
          {overdueTasks.map(task => (
            <div key={task._id} className="task overdue">
              <h4>{task.title}</h4>
              <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
        {user.role === 'Admin' && (
          <div className="create-task">
            <h3>Create Task</h3>
            <form onSubmit={handleCreateTask}>
              <input type="text" placeholder="Title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} required />
              <textarea placeholder="Description" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} required />
              <input type="text" placeholder="Assigned To (User ID)" value={newTask.assignedTo} onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })} required />
              <select value={newTask.project} onChange={(e) => setNewTask({ ...newTask, project: e.target.value })} required>
                <option value="">Select Project</option>
                {projects.map(project => <option key={project._id} value={project._id}>{project.name}</option>)}
              </select>
              <input type="date" value={newTask.deadline} onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })} required />
              <button type="submit">Create Task</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;