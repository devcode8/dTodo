import React, { useEffect, useState } from "react";
import Card from "./components/card";
import Footer from "./components/footer";
import CreateArea from "./components/CreateArea";
import { dToDO } from "../../declarations/dToDO";

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(newNote) {
    setNotes((prevnotes) => {
      dToDO.createNote(newNote.title, newNote.content);
      return [newNote,...prevnotes ];
    });
  }
  useEffect(()=>{
    getData();
  },[])

  async function getData() {
    const dataArray = await dToDO.readNotes();
    setNotes(dataArray);
  }
  function deleteNote(id) {
    dToDO.removeNote(id);
    setNotes((prevnotes) => {
      return prevnotes.filter((note,index) => index !== id);
    });
  }
  return (
    <div>
      <CreateArea onadd={addNotes} />
      {notes.map((data, i) => (
        <Card
          key={i}
          id={i}
          title={data.title}
          content={data.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
