import React, { useState } from 'react';
import Edit from "../components/Edit";
import CompetitorList from '../components/CompetitorList';

const Paasarja = () => {
  const [paragraph, setParagraph] = useState("")

  return (
    <div>
      <Edit
        title="Pääsarja - Info"
        value={paragraph}
        onChange={setParagraph}/>
      <h1>Pääsarja - Tulokset</h1>
      <CompetitorList />
    </div>
  );
};

export default Paasarja;