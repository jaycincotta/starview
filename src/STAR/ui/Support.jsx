import React from "react";

export default function Support({ candidate }) {
  const total = candidate.support.reduce((current, total) => total + current);
  const width = candidate.support.map(value => (value / total) * 100);
  const offset = [
    width[1] + width[2] + width[3] + width[4] + width[5],
    width[2] + width[3] + width[4] + width[5],
    width[3] + width[4] + width[5],
    width[4] + width[5],
    width[5],
    0
  ];

  const colors = [
    "#e0e0e0",
    "#b5d2a9",
    "#83d475",
    "#57c84d",
    "#2eb62c",
    "#019021"
  ];
  const Bar = ({ index }) => (
    <rect
      width={width[index]}
      height="100"
      x={offset[index]}
      y="0"
      fill={colors[index]}
      strokeWidth="0"
    >
      <title>
        {candidate.support[index]} voter
        {candidate.support[index] === 1 ? "" : "s"} ({width[index].toFixed(0)}%)
        rated {candidate.name} {index} stars
      </title>
    </rect>
  );
  return (
    <div className="support">
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <Bar index="5" />
        <Bar index="4" />
        <Bar index="3" />
        <Bar index="2" />
        <Bar index="1" />
        <Bar index="0" />
      </svg>
    </div>
  );
}
