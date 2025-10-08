const API_BASE = process.env.REACT_APP_API_BASE || '';

export const getContent = async (key) => {
  const res = await fetch(`${API_BASE}/api/content/${encodeURIComponent(key)}`);
  if (!res.ok) throw new Error('Sisällön haku epäonnistui');
  return res.json();
};

export const updateContent = async (key, body, token) => {
  const res = await fetch(`${API_BASE}/api/content/${encodeURIComponent(key)}` , {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ body })
  });
  if (!res.ok) throw new Error('Sisällön tallennus epäonnistui');
  return res.json();
};

export const loginAdmin = async (username, password) => {
  const res = await fetch(`${API_BASE}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error('Kirjautuminen epäonnistui');
  return res.json();
};

// module: API helpers
export const getLeaderboard = async (category) => {
  const res = await fetch(`${API_BASE}/api/leaderboard/${encodeURIComponent(category)}`);
  if (!res.ok) throw new Error('Failed to get leaderboard');
  return res.json();
};

export const updateLeaderboard = async (category, entries, token) => {
  const res = await fetch(`${API_BASE}/api/leaderboard/${encodeURIComponent(category)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ entries })
  });
  if (!res.ok) throw new Error('Failed to update leaderboard');
  return res.json();
};