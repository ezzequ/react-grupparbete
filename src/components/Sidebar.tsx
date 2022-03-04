import { useState, useEffect } from "react";
import Board from "./Board";
import "./Sidebar.css";
import ProfilePic from "./ProfilePic";

function Sidebar() {
  const [components, setComponents] = useState<string[]>([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    const inputData = localStorage.getItem("test");
    if (inputData) {
      setComponents(JSON.parse(inputData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(components));
  });

  function addComponent() {
    setComponents([...components, note]);
  }

  function removeBoardFromState(component: string) {
    setComponents(components.filter((c) => c !== component));
  }

  return (
    <nav className="sidebar w fl-10">
      <ProfilePic />
     
      <input
        id="title"
        type="text"
        name="title"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className=" button br-pill bn " onClick={addComponent} id={note}>
        {/* ➕ New board */} Post comment
      </button>

      {components.map((component, i) => (
        <Board
          key={component}
          onRemove={() => removeBoardFromState(component)}
          text={component}
        />
      ))}
    </nav>
  );
}

export default Sidebar;
