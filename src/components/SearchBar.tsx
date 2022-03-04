import React, { FormEvent } from "react";
import ProfilePic from "./ProfilePic";


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
        return (
          <div className=" w-90 h3-m bg-white-50 br-pill pa2 ma2 flex justify-around mw7 center white">
            <form
              className="flex items-center justify-between"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <input
                className="h2 bg-white-60 ba br-pill fl w-60 pa3"
                type="text"
                name="query"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
                id="text"
                placeholder="Search..."
              />

              <button
                type="submit"
                className="searchButton white h2 br-pill bg-black-10 bn pa2"
              >
                Search
              </button>
            </form>
            
            <div className="flex justify-around w4 ">
              

              {this.state.isLoggedIn ? (
                <ProfilePic />
              ) : (
                <button
                  className="searchButton white h2 br-pill bg-black-10 bn pa2"
                  onClick={() => this.setState({ isLoggedIn: true })}
                >
                  Log In
                </button>
              )}

              <div className=" f3 flex items-center tracked">...</div>
            </div>
          </div>
        );

        
    } 
}

export default SearchBar;