import { useState } from "react";



export default function HooverDiv(){
return(
HooverDivComponent()

)

}


function HooverDivComponent() {
    const [isShown, setIsShown] = useState(false);
  
    return (
      <div className="HooverDiv absolute">
        <div className="HooverDiv fr w90 ma2 bg-pink relative"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          Hover over me!
        </div>
        {isShown && (
          <div className="fr h3 w-50 bg-black-50 br3 fixed pa3 ma3 h5 center tc white shadow-"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          >
              <h1 >Title</h1>
              <hr className="bb bg-white white br2"></hr>
              <p>description description description description description description</p>
              <p className="tr">photograoher: <br></br> camera and lens:</p>
          <button className=" white tc ba bg-black-10 br-pill pa2 b--white">add image to board</button>
          </div>
        )}
      </div>
    );
  }
  
 
  