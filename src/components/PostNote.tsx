import { useState, useEffect } from "react";
import Board from "./Board";
import "./PostNote.css";
import ProfilePic from "./ProfilePic";

function PostNote() {
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
    <nav className="sidebar w fl-10">
      <ProfilePic />
      {/* <h3 className="title">📌 My boards</h3> */}
      {/* <label className="label-title" htmlFor="title">
        Title
      </label> */}
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className=" button br-pill bn " onClick={addNote} id={title}>
        {/* ➕ New board */} Post comment
      </button>

      {notes.map((note, i) => (
        <Board
          key={note}
          onRemove={() => removeNoteFromState(note)}
          text={note}
        />
      ))}
    </nav>
  );
}

export default PostNote;
