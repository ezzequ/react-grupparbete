import { Component, CSSProperties } from "react";
import PhotoCard from "./PhotoCard";
import "./photoCard.css";


interface Props {};


class Main extends Component {
    constructor(props: Props) {
        super(props);
        this.state = { imagesData: [] };
    }

    
    
    render() {
        console.log(this.state);
      return(
        <main className="fr w-100 h-100 pa2">
                <PhotoCard />
        </main>
        );  
    }
}



export default Main;