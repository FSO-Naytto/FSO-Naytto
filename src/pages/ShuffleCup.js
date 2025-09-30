import React, { useState } from 'react';
import Edit from "../components/Edit";
import CompetitorList from '../components/CompetitorList';

const ShuffleCup = () => {
  const [paragraph, setParagraph] = useState("")
  
  return (
    <div>
      <Edit
        title="Shuffle Cup - Info"
        value={paragraph}
        onChange={setParagraph}/>
      <h1>Shuffle Cup - Tulokset</h1>
      <CompetitorList />
    </div>
  );
};

export default ShuffleCup;