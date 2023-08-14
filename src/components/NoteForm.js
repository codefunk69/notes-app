import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addNote(inputValue);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a note"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NoteForm;
