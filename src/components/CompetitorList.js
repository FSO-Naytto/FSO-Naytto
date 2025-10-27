import React, { useState, useEffect, useCallback } from "react";
import { useAdmin } from "../auth/AdminContext";
import { getLeaderboard, updateLeaderboardSource } from "../services/api";
import "./CompetitorList.css";

const CompetitorList = ({ category }) => {
  const [competitors, setCompetitors] = useState([]);
  const [sourceUrl, setSourceUrl] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [urlInput, setUrlInput] = useState("");

  const { isAdmin, token } = useAdmin();

  const fetchLeaderboard = useCallback(() => {
    let mounted = true;
    setFetchError("");
    getLeaderboard(category)
      .then((data) => {
        if (!mounted) return;
        const entries = Array.isArray(data?.entries) ? data.entries : [];
        setCompetitors(
          entries.map((e, i) => ({ id: Date.now() + i, name: e.name, points: Number(e.points) }))
        );
        setSourceUrl(data.sourceUrl || "");
        setUrlInput(data.sourceUrl || "");
        if (data.error) {
          setFetchError(data.error);
        }
      })
      .catch(() => {
        if (mounted) {
          setFetchError("Pisteiden haku epäonnistui. Palvelin ei vastaa.");
        }
      });
    return () => {
      mounted = false;
    };
  }, [category]);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const handleUrlSave = async (e) => {
    e.preventDefault();
    try {
      await updateLeaderboardSource(category, urlInput, token);
      fetchLeaderboard(); 
    } catch (error) {
      setFetchError("URL-osoitteen tallennus epäonnistui.");
    }
  };

  const sortedCompetitors = [...competitors].sort((a, b) => b.points - a.points);

  return (
    <div>
      {isAdmin && (
        <form onSubmit={handleUrlSave} className="url-form">
          <input
            type="text"
            placeholder="Syötä tulossivun URL"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="url-input"
          />
          <button type="submit">Tallenna URL</button>
        </form>
      )}
      
      {fetchError && <div className="error-message">{fetchError}</div>}

      {isAdmin && sourceUrl && (
        <p className="source-link">
          Pisteet haettu osoitteesta: <a href={sourceUrl} target="_blank" rel="noopener noreferrer">{sourceUrl}</a>
        </p>
      )}

      <ul className="competitorList">
        {sortedCompetitors.map((c, idx) => (
          <li key={c.id}>
            {idx + 1}. {c.name} - {c.points} pistettä
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitorList;
