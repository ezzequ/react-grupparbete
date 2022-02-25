import { Component } from "react";
import PhotoCard from "./PhotoCard";


interface Props {};


class Main extends Component {
    constructor(props: Props) {
        super(props);
        this.state = { imagesData: [] };
    }

    
    
    render() {
        console.log(this.state);
      return(
        <main className="fr w-100 pa2">
           <PhotoCard />
        </main>
        );  
    }
}

export default Main;