import { useState } from 'react';
import api from '../services/api';
import taskImage from '../assets/task.png';

function Register({ onRegister, onSwitchToLogin }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Member');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await api.post('/auth/register', {
        name,
        email,
        password,
        role
      });

      onRegister(res.data.token, res.data.user);

    } catch (err) {

      alert('Registration failed');

    }
  };

  return (
    <div className="auth-wrapper">

      <div className="auth-card">

        <h1 className="logo">Orbitask</h1>

        <img src={taskImage} alt="task" className="auth-image" />

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Member">Member</option>
            <option value="Admin">Admin</option>
          </select>

          <button type="submit">
            Sign Up
          </button>

        </form>

        <p>
          Already have an account?
          <span onClick={onSwitchToLogin}>
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Register;