import { useState } from "react";
import Board from "./Board";
import "./Sidebar.css";
import ProfilePic from "./ProfilePic";

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
      {/* <FaBars /> */}
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
      <button className=" button br-pill bg-black-20 bn black" onClick={addComponent}  id={title}>
        {/* ➕ New board */} post Comment
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
