import React from "react";
import CandidateGroup from "./CandidateGroup";
import { flattenSingle, flattenMulti } from "../flatten";

export default function StarSummary({ cvr, isMulti, onHover, selected }) {
  const sections = isMulti ? flattenMulti(cvr) : flattenSingle(cvr);

  return (
    <div>
      <div className="star">
        {sections.map((section, n) => (
          <CandidateGroup
            key={isMulti ? `m${n}` : `s${n}`}
            section={section}
            onHover={onHover}
            isMulti={isMulti}
            selected={selected}
            cvr={cvr}
          />
        ))}
      </div>
    </div>
  );
}
