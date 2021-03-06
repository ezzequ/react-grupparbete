import { useState } from "react";
import PostNotes from "./PostNotes";

interface Props {
  imageData: {
    alt_description: string;
  };
}

export default function HooverDiv(props: Props) {
  const [show, setShow] = useState(false);
  const [isHoverd, setIsHoverd] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      {isHoverd !== false && (
        <div className="HooverDiv hoover-div absolute w-100 bg-black-20 center tc white shadow-5">
          <div className=" br3" onClick={() => console.log("apa")}>
            <p>{props.imageData.alt_description}</p>
          </div>
          <div>
            <button
              className="bg-black-10 bn br-pill pa1 white"
              onClick={() => setShow(!show)}
            >
              {show ? " Hide comments " : " Show comment section "}
            </button>
            {show && <PostNotes></PostNotes>}
          </div>
        </div>
      )}
    </div>
  );
}
