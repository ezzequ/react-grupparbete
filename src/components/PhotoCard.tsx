import { Component, CSSProperties } from "react"
import imageitems from "../global/imageitems";

import "./photoCard.css"


interface Props {}
interface State {
    imagesData: any[];
}


interface ImageData {
    alt_description: "white modern cement building under blue sky";
    id: "RFDP7_80v5A";
    liked_by_user: false;
    urls: {
        full: string;
        raw: string;
        regular: string;
    }  
}


class PhotoCard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { imagesData: [] };
    }


    async componentDidMount() {
        const url = 'https://api.unsplash.com/search/photos?page=1&per_page=50&query=scotland';
        const response = await fetch(url, {
            headers: {
                "authorization": "Client-ID atOI9pA6vM7-48sURp4sfveE-vt7pSu99waKjQ5GWUc"
            }
        });
        const data: ImageData[] = (await response.json()).results; 
        this.setState({ imagesData: data});
        console.log(data[0])
    
    }


    render() {
    
        return(
        
            <div style={photoContainerStyle}>
                {this.state.imagesData.map(imageData => 
                    <div key={imageData.id} style={{height: "100%"}} className="photo-card bg-light-grey br1 grow ma2 shadow-5 fr br3">
                        <img src={imageData.urls.regular} alt={imageData.alt_description} className="br3"  />
                    </div>
                )}
            
            </div>
        )
    }


}

const photoContainerStyle: CSSProperties = {
    width: "100%",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 20rem [col-start])",

    justifyContent: "center"
}



export default PhotoCard

// Om en rad = 10px så kommer ett card = x antal rader. 
// kortets height / 10 = antal rader cardet ska spana


