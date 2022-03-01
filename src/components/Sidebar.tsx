import { useState } from "react";
import Board from "./Board";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa";

function Sidebar() {
  const [components, setComponents] = useState<string[]>([]);
  const [title, setTitle] = useState("");

  function addComponent() {
    setComponents([...components, title]);
  }

  function removeBoardFromState(component: string) {
    setComponents(components.filter((c) => c !== component));
  }

  return (
    <nav className="sidebar w fl-10">
      <FaBars />
      <h3 className="title">📌 My boards</h3>
      <label className="label-title" htmlFor="title">
        Title
      </label>
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addComponent} className="button" id={title}>
        ➕ New board
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
