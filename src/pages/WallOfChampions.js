import React, { useState } from "react";
import Edit from '../components/Edit';

const WallOfChampions = () => {
  const [paragraph, setParagraph] = useState("")

  return (
    <div>
      <Edit
      title="Wall of Champions"
      contentKey="wall-of-champions"
      value={paragraph}
      onChange={setParagraph}/>
    </div>
  );
};

export default WallOfChampions;