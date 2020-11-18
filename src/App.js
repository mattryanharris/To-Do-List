import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';

function App() {

  useEffect(() => {
    let noteData = localStorage.getItem("note");
    let noteObject = JSON.parse(noteData);
    let savedData = localStorage.getItem("saved");
    let savedString = JSON.parse(savedData);
    setNote(noteObject);
    setSaved(savedString);
  }, []);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [saved, setSaved] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({...note, [name]: value});
    localStorage.setItem("note", JSON.stringify(note));
    localStorage.setItem("saved", JSON.stringify(saved));
    setSaved(Date.now());
  }


  return (
    <div className="notes">
      <h1>Notes</h1>
      <p>Last saved at {saved && new Date(saved).toLocaleTimeString()}</p>
      <input name="title" value={note && note.title}placeholder="Title" onChange={handleInput} />
      <textarea name="content" onChange={handleInput} value={note && note.content} placeholder="New note..." />
    </div>
  );
}

export default App;
