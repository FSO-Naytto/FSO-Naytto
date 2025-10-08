import React, { useState } from "react";
import { useAdmin } from '../auth/AdminContext';

const WallOfChampions = () => {
  const [images, setImages] = useState([]);

  // Lisää kuvia
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setImages([...images, newImage]);
    }
  };

  const { isAdmin } = useAdmin();

  return (
    <div>
      <h1>Wall of Champions</h1>
      {/* Tiedoston valinta */}
      {isAdmin && (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      )}
      {/* Näyttää ladatut kuvat listassa */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {images.map((img, idx) => (
          <li key={idx} style={{ textAlign: "center", margin: "1em 0" }}>
            <img src={img} style={{ maxWidth: "500px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WallOfChampions;