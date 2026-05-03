import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import api from './services/api';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('login');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // In real app, fetch user data
      setUser({});
      setPage('dashboard');
    }
  }, []);

  const handleLogin = (token, userData) => {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(userData);
    setPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setPage('login');
  };

  return (
    <div>
      {page === 'login' && <Login onLogin={handleLogin} onSwitchToRegister={() => setPage('register')} />}
      {page === 'register' && <Register onRegister={handleLogin} onSwitchToLogin={() => setPage('login')} />}
      {page === 'dashboard' && <Dashboard user={user} onLogout={handleLogout} />}
    </div>
  );
}

export default App;