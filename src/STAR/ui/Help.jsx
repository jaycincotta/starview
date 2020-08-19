import React from "react";

export default function Help({
  isMulti,
  setIsMulti,
  setShowHelp,
  setEditMode
}) {
  return (
    <div className="help">
      <div>
        <div className="close" onClick={() => setShowHelp(false)}>
          X
        </div>
        <h1>Getting Started</h1>
        <p>
          You are looking at sample data showing the results of a{" "}
          <a href="https://www.starvoting.us/">STAR</a>{" "}
          {isMulti ? "multi" : "single"}-winner election.
        </p>
        <p>
          Two metrics are visualized for each candidate:
          <br />
          {/* <i className="smaller">
            <b>TIP</b>: Try hovering over candidates and graphs!
          </i> */}
        </p>
        <ul>
          <li>
            <b>STAR Rating</b>: The average rating the candidate received from
            the voters.
          </li>
          <li>
            <b>Enthusiasm</b>: The number of voters who ranked a candidate 5, 4,
            3, 2, or 1.
          </li>
        </ul>
        {!isMulti && (
          <>
            <p>
              In a{" "}
              <span className="link" onClick={() => setIsMulti(!isMulti)}>
                Single-Winner
              </span>{" "}
              election, results are sorted by descending total score. The winner
              is first, followed by the other finalist, then the remaining
              candidates. In this sample, there is a TIE between Dylan and Eliza
              so both shown as winners.
            </p>
            <p>
              STAR Multi-Winner elections are a little different. Click{" "}
              <span className="link" onClick={() => setIsMulti(!isMulti)}>
                here
              </span>{" "}
              to see for yourself.
            </p>
          </>
        )}
        {isMulti && (
          <p>
            In a{" "}
            <span className="link" onClick={() => setIsMulti(!isMulti)}>
              Multi-Winner
            </span>{" "}
            election, the tabulation process is repeated until all candidates
            have been ranked. Did you notice that Adam moved up in the results?
            It's because his support is broader though not as enthusiastic as
            Cindy's. This causes him to win the 2<sup>nd</sup> place run-off
            against Cindy.
          </p>
        )}
        <p className="larger">
          Click{" "}
          <b
            className="link"
            onClick={() => {
              setEditMode(true);
              setShowHelp(false);
            }}
          >
            EDIT
          </b>{" "}
          to play with this sample data or to paste in your own election
          results!
        </p>
        <p>
          After editing the sample data, this help message will disappear. Just
          click <b>Help</b> to see it again.
        </p>
        <p>
          <a href="mailto:jay@equal.vote?subject=STAR Election Result Viewer">
            Email me
          </a>{" "}
          with any questions or feedback!
        </p>
      </div>
    </div>
  );
}
