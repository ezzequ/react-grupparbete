import { Component, CSSProperties } from "react"
import ButtonAdd from "./ButtonAdd";
import HooverDiv from "./HooverDiv"
import "./HooverDiv.css"

import "./photoCard.css"



interface Props {
    query: string
}
interface State {
    imagesData: any[];
}


interface ImageData {
    alt_description: string;
    id: string;
    liked_by_user: boolean;
    imgHeight: number;
    urls: {
        full: string;
        raw: string;
        regular: string;
    }  
    
}


class PhotoCardCollection extends Component<Props, State> {
   
    constructor(props: Props) {
        super(props);
        this.state = { 
            imagesData: [],
     };
    }

    
   async fetchImages() {
        const url = "https://api.unsplash.com/search/photos?page=1&per_page=50&query=" + this.props.query;
        const response = await fetch(url, {
            headers: {
                "authorization": "Client-ID atOI9pA6vM7-48sURp4sfveE-vt7pSu99waKjQ5GWUc"
            }
        });
        const data: ImageData[] = (await response.json()).results; 
        this.setState({ imagesData: data});
        console.log(this.props.query)
    }
    
   
     componentDidMount() {
        this.fetchImages();
        
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.query !== this.props.query) {
            this.fetchImages();
        }   
    }

    render() {

        return(
            
            <div style={photoContainerStyle}>
                {this.state.imagesData.map((imageData) => 
                    <div key={imageData.id} className="photo-card bg-light-grey br1 grow ma2 shadow-5 fr br3">
                        
                            <HooverDiv imageData={{
                                alt_description: imageData.alt_description,
                            }} children={ButtonAdd}></HooverDiv>
                    
                        <img id={imageData.id} src={imageData.urls.regular} alt={imageData.alt_description} className="br3"  />
                    </div>
                )}
            </div>
        )
        
    }
    
   
}
 console.log()
const photoContainerStyle: CSSProperties = {
    width: "100%",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 20rem [col-start])",
    gridAutoRows: "",
    justifyContent: "center"
}




export default PhotoCardCollection


// Om en rad = 10px så kommer ett card = x antal rader. 
// kortets height / 10 = antal rader cardet ska spana


