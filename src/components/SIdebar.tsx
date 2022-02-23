import { useState } from "react";
import Board from "./Board";
import "./Sidebar.css";


function Sidebar() {
  const [components, setComponents] = useState([""]);
  const [title, setTitle] = useState(""); 

  function addComponent() {
    setComponents([...components, title]);
  }

  return (
    <nav className="sidebar w fl-10">
      <h3 className="title">Mina anslagstavlor</h3>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addComponent} className="button" id={title}>
        ➕ Ny tavla
      </button>
      {components.map((item, i) => (
        <Board text={item} />
      ))}
    </nav>
  );
}

export default Sidebar;
