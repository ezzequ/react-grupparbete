import React, { FormEvent } from "react";
import ProfilePic from "./ProfilePic";
// import UserProfile from "./UserProfile";

interface Props {
  onQueryChange: (query: string) => any
};

interface State {
    query: string;
    isLoggedIn: boolean;
};

class SearchBar extends React.Component<Props, State> {

    
    constructor(props: Props) {
        super(props);
        this.state = { 
            query: '',
            isLoggedIn: false,
  
        };
    
        
    }

    handleSubmit(e: FormEvent) {
         e.preventDefault();
        this.props.onQueryChange(this.state.query);
       
    }


  render() {
        console.log(this.state.query)
        return(
            <div className=" w-90 h3-m bg-white br-pill pa2 flex justify-around mw7 center ">
                <form className="flex items-center justify-between"  onSubmit={e => this.handleSubmit(e)}  >

                    <input className="h2 bg-ligtest-gray ba br-pill fl w-60 pa2" 
                        type="text"
                        name="query" 
                        value={this.state.query}
                        onChange={(e) => this.setState(({query : e.target.value})) }
                        id="text" 
                        placeholder="Search..." 
                    />
                    
                    <button type="submit" className="searchButton h2" >Search</button>
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
}

export default SearchBar;