import { Component, CSSProperties } from "react"
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
        const url = 'https://api.unsplash.com/search/photos?page=1&per_page=50&query=blackandwhite';
        const response = await fetch(url, {
            headers: {
                "authorization": "Client-ID atOI9pA6vM7-48sURp4sfveE-vt7pSu99waKjQ5GWUc"
            }
        });
        const data: ImageData[] = (await response.json()).results; 
        this.setState({ imagesData: data});
    }


    render() {
        
        return(
        
            <div style={photoContainerStyle}>
                {this.state.imagesData.map(imageData => 
                    <div className="photo-card bg-light-grey br1 grow ma2 shadow-5 fr br3">
                        <img key={imageData.id} src={imageData.urls.regular} alt={imageData.alt_description} className="br3" />
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
    gridTemplateColumns: "repeat(6, 20rem [col-start])",
    gridAutoRows: "",
    justifyContent: "center"
}

export default PhotoCard;