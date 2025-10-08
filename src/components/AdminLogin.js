import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../auth/AdminContext';

const AdminLogin = () => {
  const { isAdmin, login, logout } = useAdmin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const ok = await login(username, password);
    if (ok) {
      setError('');
      navigate('/');
    } else {
      setError('Väärä käyttäjä tai salasana');
    }
  };

  if (isAdmin) {
    return (
      <div>
        <h1>Admin</h1>
        <p>Olet kirjautunut adminiksi.</p>
        <button onClick={logout}>Kirjaudu ulos</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin-kirjautuminen</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Käyttäjätunnus"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Kirjaudu</button>
      </form>
      {error && <p style={{ color: 'tomato' }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;