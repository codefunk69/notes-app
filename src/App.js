import React, { useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, text]);
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
