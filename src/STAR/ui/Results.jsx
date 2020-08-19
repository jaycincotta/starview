import React, { useState } from "react";
import StarSummary from "./StarSummary";
import TopLineResults from "./TopLineResults";
//import StarClassic from "./StarClassic";

export default function Results(props) {
  const [selected, setSelected] = useState(null);
  const handleHover = (candidate, active) => {
    if (active) {
      setSelected(candidate);
    } else if (selected === candidate) {
      setSelected(null);
    }
  };

  return (
    <>
      {/* <StarClassic {...props} onHover={handleHover} selected={selected} /> */}
      <TopLineResults {...props} onHover={handleHover} selected={selected} />
      <StarSummary {...props} onHover={handleHover} selected={selected} />
    </>
  );
}
