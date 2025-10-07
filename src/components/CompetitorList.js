import React, { useState } from "react";
import "./CompetitorList.css";

const CompetitorList = () => {
  const [competitors, setCompetitors] = useState([]);
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPoints, setEditPoints] = useState("");

  // Lisää kilpailijan
  const addCompetitor = (e) => {
    e.preventDefault();
    if (!name || !points) return;
    setCompetitors([
      ...competitors,
      { id: Date.now(), name, points: Number(points) }
    ]);
    setName("");
    setPoints("");
  };

  // Poistaa kilpailijan
  const handleDelete = (id) => {
    setCompetitors(competitors.filter(c => c.id !== id));
  };

  // Muokkaa kilpailijan tietoja
  const handleEdit = (competitor) => {
    setEditingId(competitor.id);
    setEditName(competitor.name);
    setEditPoints(competitor.points);
  };

  // Tallentaa kilpailijan muokkauksen jälkeen
  const handleSave = (id) => {
    setCompetitors(competitors.map(c =>
      c.id === id ? { ...c, name: editName, points: Number(editPoints) } : c
    ));
    setEditingId(null);
    setEditName("");
    setEditPoints("");
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
      <ul className="competitorList">
        {sortedCompetitors.map((c, idx) => (
          <li key={c.id}>
            {editingId === c.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                />
                <input
                  type="number"
                  value={editPoints}
                  onChange={e => setEditPoints(e.target.value)}
                />
                <button onClick={() => handleSave(c.id)}>Tallenna</button>
              </>
            ) : (
              <>
                {idx + 1}. {c.name} - {c.points} pistettä
                <button onClick={() => handleEdit(c)}>Muokkaa</button>
                <button onClick={() => handleDelete(c.id)}>Poista</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitorList;