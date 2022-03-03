import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
// import { Component, CSSProperties } from "react";
import PhotoCardCollection from "./PhotoCardCollection";
import "./photoCard.css";
import SearchBar from "./SearchBar";


interface Props {
    
};
interface State {
    searchQuery: string,
    imagesData: [],
    
};


class Main extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            imagesData: [],
            searchQuery: ""
        };
      // this.handleChange = this.handleChange.bind(this)
    }

  
    handleQueryChange = (query: string) => {
        console.log(query)
        this.setState((query) => {
          return {searchQuery: query}
        })
        
      }

     render() {
      return(
        <main className="fr w-100 h-100 pa2"  >
                <SearchBar onQueryChange={this.handleQueryChange}  />
                <PhotoCardCollection query = {this.state.searchQuery}/>
        </main>
        );  
    } 
}
export default Main;


