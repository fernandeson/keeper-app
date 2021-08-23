import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(Note) {
    setNotes(prevNotes => {
      return [...prevNotes, Note]
    })
  };

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(el => {
        return el.id !== id;
      });
    });
  };
  
  
  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map(el => (
        <Note
          key={el.key}
          id={el.id}
          title={el.title}
          content={el.content}
          onDelete={deleteNote}
          />
      ))}
      <Footer />
    </div>
  );
}

export default App;
