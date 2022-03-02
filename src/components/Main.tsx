import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
// import { Component, CSSProperties } from "react";
import PhotoCard from "./PhotoCard";
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

   componentDidMount(){
      this.forceUpdate()


   }
   
 
     render() {
        console.log(this.state.searchQuery);
      return(
        <main className="fr w-100 h-100 pa2">
  
                <SearchBar handleChange={ () => this.handleOnChange(this.state.searchQuery) } />
                <PhotoCard query = {this.state.searchQuery}/>
        </main>
        );  
    } 
    
    handleOnChange(query: string) {
        console.log('asdfghjklkjhgfghj')
        console.log(query)
        this.setState({ searchQuery : query });
        console.log(this.state.searchQuery)
        
    }
}



export default Main;


