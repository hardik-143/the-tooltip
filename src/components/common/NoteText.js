import React from "react";

const NoteText = ({ children }) => {
  return (
    <p className="section-secondary-title">
      <span className="note-text">
        Note:
      </span>{" "}
      {children}
    </p>
  );
};

export default NoteText;
