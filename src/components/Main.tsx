import React from "react";
import PhotoCardCollection from "./PhotoCardCollection";
import SearchBar from "./SearchBar";


interface Props { };

interface State {
    searchQuery: string,
    imagesData: [],
    
};


class Main extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            imagesData: [],
            searchQuery: "landscape"
        };
    }

  
    handleQueryChange = (query: string) => {
        this.setState({searchQuery: query})
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


