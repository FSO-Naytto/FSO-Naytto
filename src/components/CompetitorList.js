import React, { useState, useEffect } from "react";
import { useAdmin } from "../auth/AdminContext";
import { getLeaderboard, updateLeaderboard } from "../services/api";
import "./CompetitorList.css";

const CompetitorList = ({ category }) => {
  const [competitors, setCompetitors] = useState([]);
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPoints, setEditPoints] = useState("");

  const { isAdmin, token } = useAdmin();

  // Hakee leaderboardin kategoriakohtaisesti
  useEffect(() => {
    let mounted = true;
    getLeaderboard(category)
      .then((data) => {
        if (!mounted) return;
        const entries = Array.isArray(data?.entries) ? data.entries : [];
        setCompetitors(
          entries.map((e, i) => ({ id: Date.now() + i, name: e.name, points: Number(e.points) }))
        );
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [category]);

  // Tallentaa muutokset palvelimeen
  const persist = async (next) => {
    try {
      await updateLeaderboard(
        category,
        next.map((c) => ({ name: c.name, points: Number(c.points) })),
        token
      );
    } catch (e) {
      // hiljainen virhe
    }
  };

  // Kilpailijan lisäys
  const addCompetitor = (e) => {
    e.preventDefault();
    if (!name || !points) return;
    const next = [
      ...competitors,
      { id: Date.now(), name, points: Number(points) }
    ];
    setCompetitors(next);
    if (isAdmin) persist(next);
    setName("");
    setPoints("");
  };

  // Kilpailijan poisto
  const handleDelete = (id) => {
    const next = competitors.filter((c) => c.id !== id);
    setCompetitors(next);
    if (isAdmin) persist(next);
  };

  // Kilpailijan tietojen mmuokkaus
  const handleEdit = (competitor) => {
    setEditingId(competitor.id);
    setEditName(competitor.name);
    setEditPoints(competitor.points);
  };

  const handleSave = (id) => {
    const next = competitors.map((c) =>
      c.id === id ? { ...c, name: editName, points: Number(editPoints) } : c
    );
    setCompetitors(next);
    setEditingId(null);
    setEditName("");
    setEditPoints("");
    if (isAdmin) persist(next);
  };

  // Kilpailijoiden lajittelu numerojärjestyksessä pisteiden mukaan
  const sortedCompetitors = [...competitors].sort((a, b) => b.points - a.points);

  return (
    <div>
      {isAdmin && (
        <form onSubmit={addCompetitor}>
          <input
            type="text"
            placeholder="Nimi"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Pisteet"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
          <button type="submit">Lisää kilpailija</button>
        </form>
      )}
      <ul className="competitorList">
        {sortedCompetitors.map((c, idx) => (
          <li key={c.id}>
            {editingId === c.id ? (
              isAdmin ? (
                <>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <input
                    type="number"
                    value={editPoints}
                    onChange={(e) => setEditPoints(e.target.value)}
                  />
                  <button onClick={() => handleSave(c.id)}>Tallenna</button>
                </>
              ) : (
                <>
                  {idx + 1}. {c.name} - {c.points} pistettä
                </>
              )
            ) : (
              <>
                {idx + 1}. {c.name} - {c.points} pistettä
                {isAdmin && (
                  <>
                    <button onClick={() => handleEdit(c)}>Muokkaa</button>
                    <button onClick={() => handleDelete(c.id)}>Poista</button>
                  </>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitorList;