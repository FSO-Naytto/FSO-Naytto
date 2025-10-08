import React, { useState } from 'react';
import Edit from "../components/Edit";

const Touge = () => {
  const [paragraph, setParagraph] = useState("")

  return (
    <div>
      <Edit
        title="Touge - Info"
        contentKey="touge_info"
        value={paragraph}
        onChange={setParagraph}/>
    </div>
  );
};

export default Touge;