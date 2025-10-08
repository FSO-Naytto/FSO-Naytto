import React, { useState } from 'react';
import Edit from "../components/Edit";
import CompetitorList from '../components/CompetitorList';

const Paasarja = () => {
  const [paragraph, setParagraph] = useState("")

  return (
    <div>
      <Edit
        title="Pääsarja - Info"
        contentKey="paasarja_info"
        value={paragraph}
        onChange={setParagraph}/>
      <h1>Pääsarja - Tulokset</h1>
      <CompetitorList category="paasarja" />
    </div>
  );
};

export default Paasarja;