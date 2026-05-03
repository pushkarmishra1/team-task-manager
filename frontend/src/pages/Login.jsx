import { useState } from 'react';
import api from '../services/api';

function Login({ onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });

      console.log("LOGIN RESPONSE:", res.data);
    //   console.log("USER:", res.data.user);

      // 🔥 TOKEN SAVE
      localStorage.setItem("token", res.data.token);

      // optional
      if (onLogin) {
        onLogin(res.data.token, res.data.user);
      }

      alert("Login success");

    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data);
      alert('Login failed');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
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

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <button onClick={onSwitchToRegister}>Register</button>
      </p>
    </div>
  );
}

export default Login;