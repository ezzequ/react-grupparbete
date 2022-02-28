//import { CSSProperties } from "react";
import React from "react";
import ProfilePic from "./ProfilePic";

interface Props {};
interface State {
    value: string;
    isLoggedIn: boolean;
};

class SearchBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            value: '', 
            isLoggedIn: false 
        };

        
    }

    render() {
        return(
            <div className=" w-90 h3-m bg-white br-pill pa2 flex justify-around mw7 center ">
                <form className="flex items-center justify-between">
                    <input className="h2 bg-ligtest-gray ba br-pill fl w-60 pa2" 
                        type="text"
                        name="query" 
                        // value={this.state.value} 
                        id="text" 
                        placeholder="Search..." 
                    />
                    <button type="submit" className="searchButton h2 ">Search</button>
                </form>
            {/* https://www.digitalocean.com/community/tutorials/how-to-build-a-photo-search-app-with-react-using-the-unsplash-api */}
                <div className="flex justify-around w4 ">
                    <p>{/* username */}</p>

                    {this.state.isLoggedIn ? <ProfilePic /> : <button onClick={() => this.setState({isLoggedIn: true})}>Log In</button>}

                    <div className=" f3 flex items-center tracked">...</div>
                </div>
                
            </div>
        )
    }

    // function toggleLoggedIn() {
    //     console.log('clicked');
    //    return(
    //     this.setState({
    //         isLoggedIn: true
    //     })
    //    )
    // }
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