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
    isHoverd: boolean
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
            isHoverd: false
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
        for (let img of this.state.imagesData) {
            console.log(img.height, img.width);
        }

        return(
            
            <div style={photoContainerStyle}>
                {this.state.imagesData.map((imageData) => 
                    <div style={imgStyle} key={imageData.id} className="photo-card bg-light-grey br1 grow ma2 shadow-5 fr br3" >
                    {/* onMouseEnter={() => this.setState({isHoverd: true})} onMouseLeave={() => this.setState({isHoverd: false})} > */}
                        
                        {/* {this.state.isHoverd &&  */}

                            <HooverDiv imageData={{alt_description: imageData.alt_description}} children={ButtonAdd} />   
                        {/* } */}
                            
                        <img  id={imageData.id} src={imageData.urls.regular} alt={imageData.alt_description} className="br3" width="100%" height={imageData.Height} />
                    </div>
                )}
            </div>
        )
        
    }

    
    
   
}



const photoContainerStyle: CSSProperties = {
    marginTop: "2rem",
    width: "100%",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 20rem [col-start])",
    //gridAutoRows: "10px",
    justifyContent: "center"
}

const imgStyle: CSSProperties = {
    gridRowStart: "",
    //gridRowEnd: `span 30`
    position: "relative",
    


}
export default PhotoCardCollection;


// Om en rad = 10px så kommer ett card = x antal rader. 
// kortets height / 10 = antal rader cardet ska spana


