import React, { useState } from 'react';
import Edit from "../components/Edit";

const HotlapHontsa = () => {
  const [paragraph, setParagraph] = useState("")

  return (
    <div>
      <Edit
        title="Hotlap & Höntsä - Info"
        contentKey="hotlap_info"
        value={paragraph}
        onChange={setParagraph}/>
    </div>
  );
};

export default HotlapHontsa;