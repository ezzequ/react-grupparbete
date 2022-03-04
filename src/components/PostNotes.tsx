import { useState, useEffect } from "react";
import Note from "./Note";
import "./PostNotes.css";
import ProfilePic from "./ProfilePic";

function PostNotes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const inputData = localStorage.getItem("test");
    if (inputData) {
      setNotes(JSON.parse(inputData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(notes));
  });

  function addNote() {
    setNotes([...notes, title]);
  }

  function removeNoteFromState(note: string) {
    setNotes(notes.filter((c) => c !== note));
  }

  return (
    <nav className="post-notes w fl-10">
      <ProfilePic />
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className=" button br-pill bn " onClick={addNote} id={title}>
        Post comment
      </button>

      {notes.map((note, i) => (
        <Note
          key={note}
          onRemove={() => removeNoteFromState(note)}
          text={note}
        />
      ))}
    </nav>
  );
}

export default PostNotes;
