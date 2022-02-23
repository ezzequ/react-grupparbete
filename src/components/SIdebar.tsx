import { useState } from "react";
import Board from "./Board";
import "./Sidebar.css";

function Sidebar() {
  const [components, setComponents] = useState(["Ny tavla"]);

  function addComponent() {
    setComponents([...components, "Ny tavla"]);
  }

  return (
    <nav className="sidebar">
      <h3 className="title">Mina anslagstavlor</h3>
      <button onClick={addComponent} className="button">
        ➕ Ny tavla
      </button>
      {components.map((item, i) => (
        <Board text={item} />
      ))}
    </nav>
  );
}

export default Sidebar;
