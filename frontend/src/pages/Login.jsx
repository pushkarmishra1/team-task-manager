import { useState } from 'react';
import api from '../services/api';
import taskImage from '../assets/task.png';

function Login({ onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      if (onLogin) {
        onLogin(res.data.token, res.data.user);
      }

      alert("Login success");

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-wrapper">

      <div className="auth-card">

        <h1 className="logo">Orbitask</h1>

        <img src={taskImage} alt="task" className="auth-image" />

        <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>

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

          <button type="submit">
            Log In
          </button>

        </form>

        <p>
          New User?
          <span onClick={onSwitchToRegister}>
            Sign Up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;