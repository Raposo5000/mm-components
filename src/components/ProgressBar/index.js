import React, { useState } from "react";
import { BarBackground, ProgressBarActive } from "./style";

const ProgressBar = () => {
  const [value, setValue] = useState(0);
  const handleChangeRange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {value}%<br/>
      <BarBackground>
        <ProgressBarActive range={value}/>
      </BarBackground>
      <input type="range" max="200" onChange={handleChangeRange} />
      
    </div>
  );
};

export default ProgressBar;
