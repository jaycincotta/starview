import React, { useState, useEffect } from "react";
import "./styles.css";
import Banner from "./ui/Banner";
import Edit from "./ui/Edit";
import Help from "./ui/Help";
import Results from "./ui/Results";
import data from "./sample";
import parse from "./parse";

export default function StarView(props) {
  const [isMulti, setIsMulti] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showHelp, setShowHelp] = useState(!props.csv);

  const [title, setTitle] = useState(
    props.title ? props.title : "Sample Election"
  );
  const [csv, setCsv] = useState(props.csv ? props.csv : data);
  const [cvr, setCvr] = useState(null);

  useEffect(() => {
    const input = showHelp || !csv ? data : csv;
    //console.log("CSV", input);
    const json = parse(input);
    console.log("CVR", json);
    setCvr(json);
  }, [csv, showHelp]);

  const handleCancel = () => setEditMode(false);
  const handleSave = (csv, title) => {
    if (!parse(csv)) {
      return;
    }
    if (csv) setCsv(csv);
    if (title) setTitle(title);
    setEditMode(false);
    setShowHelp(false);
  };

  if (cvr && cvr.voters.length === 0) {
    return <div>No Voters</div>;
  }

  return (
    <div className="App">
      <Banner
        isMulti={isMulti}
        setIsMulti={setIsMulti}
        editMode={editMode}
        setEditMode={setEditMode}
        showHelp={showHelp}
        setShowHelp={setShowHelp}
      />
      <div className="wrapper">
        {showHelp && !editMode && (
          <Help
            isMulti={isMulti}
            setIsMulti={setIsMulti}
            setShowHelp={setShowHelp}
            setEditMode={setEditMode}
          />
        )}
        {!editMode && cvr && (
          <Results title={title} cvr={cvr} isMulti={isMulti} />
        )}
      </div>
      {editMode && (
        <Edit
          csv={csv}
          title={title}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
