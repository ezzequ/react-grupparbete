
import { createContext } from "react";
import ProfilePicture from "../assets/ProfilePic.png"

const UserProfile = () => {
    
 return {
     name: "Muffin'",
     username: "SuperMuffin'",
     profilePicture: {ProfilePicture}
 }
}

const UserContext = createContext(null);


export default UserProfile;