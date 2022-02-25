//import { CSSProperties } from "react";
import React from "react";
import ProfilePic from "./ProfilePic";

interface Props {};
interface State {
    value: string;
};

class SearchBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return(
            <div className="fr w-90 bg-white br-pill ma2 pa2">
                <form>
                    <input className="h3 bg-ligtest-gray ba br-pill fl w-60 pa2" 
                        type="text"
                        name="query" 
                        value={this.state.value} 
                        id="text" 
                        placeholder="Search..." 
                    />
                    <button type="submit" className="searchButton">
                        Search
                    </button>
                </form>
            {/* https://www.digitalocean.com/community/tutorials/how-to-build-a-photo-search-app-with-react-using-the-unsplash-api */}
                <div className="flex justify-around w4 ">
                    <ProfilePic />
                    <div className=" f3 flex items-center">...</div>
                </div>
                
            </div>
        )
    }

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