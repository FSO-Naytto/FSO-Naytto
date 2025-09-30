import React, { useState } from 'react';
import Edit from "../components/Edit";

const HotlapHontsa = () => {
  const [paragraph, setParagraph] = useState("")

  return (
    <div>
      <Edit
        title="Hotlap & Höntsä - Info"
        value={paragraph}
        onChange={setParagraph}/>
    </div>
  );
};

export default HotlapHontsa;