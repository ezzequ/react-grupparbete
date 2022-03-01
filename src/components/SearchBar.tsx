//import { CSSProperties } from "react";
import ProfilePic from "./ProfilePic";

function SearchBar() {
return(
    <div className="fr w-80 bg-white br-pill ma2 pa2 center">
        <input className="h3 w-60 bg-ligtest-gray ba br-pill"   type="text" name="text" id="text" placeholder="Search..." />
        <div className="flex flex-end w-20 fr center">
           <div className="w-30 center"> <ProfilePic /></div>
            <div className="flex items-center w-20 center">...</div>
        </div>
        
    </div>
)
}

// const rootStyle: CSSProperties = {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     position: "absolute",
//     background: "white",
//     width: "40rem",
//     height: "5rem",
//     margin: "2rem",
//     borderRadius: "100px",


// }

export default SearchBar;