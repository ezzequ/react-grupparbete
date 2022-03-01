//import { CSSProperties } from "react";
import ProfilePic from "./ProfilePic";

function SearchBar() {
return(
    <div className="fr w-90 bg-white br-pill ma2 pa2">
        <input className="h3 bg-ligtest-gray ba br-pill fl w-60 pa2"  type="text" name="text" id="text" placeholder="Search..." />
        <div className="flex justify-around w4 ">
            <ProfilePic />
            <div className=" f3 flex items-center">...</div>
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