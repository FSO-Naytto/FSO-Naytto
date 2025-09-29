import React, { useState } from 'react';
import './CompetitorList.css';

const CompetitorList = () => {
  const [competitors, setCompetitors] = useState([]);
  const [name, setName] = useState('');
  const [points, setPoints] = useState('');

  // Lisää kilpailijan
  const addCompetitor = (e) => {
    e.preventDefault();
    if (!name || !points) return;
    setCompetitors([
      ...competitors,
      { name, points: Number(points) }
    ]);
    setName("");
    setPoints("");
  };

  // Lajittelee kilpailijat numerojärjestyksessä pisteiden mukaan
  const sortedCompetitors = [...competitors].sort(
    (a, b) => b.points - a.points
  );

  return (
    <div>
      <form onSubmit={addCompetitor}>
        <input
          type="text"
          placeholder="Nimi"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Pisteet"
          value={points}
          onChange={e => setPoints(e.target.value)}
        />
        <button type="submit">Lisää kilpailija</button>
      </form>
      <ul className="competitorList" style={{ listStyleType: "none", paddingLeft: 0}}>
        {sortedCompetitors.map((c, idx) => (
          <li key={idx}>
            {idx + 1}. {c.name} - {c.points} pistettä
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitorList;