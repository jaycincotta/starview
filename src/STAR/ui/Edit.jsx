import React, { useState } from "react";

export default function Edit({ csv, title, onSave, onCancel }) {
  const [caption, setCaption] = useState(title);
  const [data, setData] = useState(csv);
  const handleCaptionChange = event => {
    setCaption(event.target.value);
  };
  const handleDataChange = event => {
    setData(event.target.value);
  };
  return (
    <div className="editmode">
      <h2>Election Name</h2>
      <input
        value={caption}
        onChange={handleCaptionChange}
        autoFocus={true}
        spellCheck="false"
      />
      <h2>CSV Data</h2>
      <textarea
        spellCheck="false"
        value={data}
        onChange={handleDataChange}
        autoFocus={true}
      />
      <br />
      <button className="primary" onClick={() => onSave(data, caption)}>
        Save
      </button>
      &nbsp;&nbsp;
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
