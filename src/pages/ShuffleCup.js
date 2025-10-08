import React, { useState } from 'react';
import Edit from "../components/Edit";
import CompetitorList from '../components/CompetitorList';

const ShuffleCup = () => {
  const [paragraph, setParagraph] = useState("")
  
  return (
    <div>
      <Edit
        title="Shuffle Cup - Info"
        contentKey="shuffle_info"
        value={paragraph}
        onChange={setParagraph}/>
      <h1>Shuffle Cup - Tulokset</h1>
      <CompetitorList category="shuffle-cup" />
    </div>
  );
};

export default ShuffleCup;