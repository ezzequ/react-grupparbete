import { Component, CSSProperties } from "react"
import HooverDiv from "./HooverDiv"

//import InfiniteScroll from "react-infinite-scroll-component";

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
        const url = 'https://api.unsplash.com/search/photos?page=10&per_page=30&query=landscape';
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
        
            <div className = "photos-container" >
                
                {this.state.imagesData.map(imageData => 
                
                
                <div style={photoCardStyle} className="bg-light-grey br1 ma1 shadow-5 fr w-40  br3"
                >
                    
                    <img key={imageData.id} src={imageData.urls.regular} alt={imageData.alt_description} className="br3 w-100"/>
                     <HooverDiv imageData={{
                         alt_description: imageData.alt_description}}>

                   </HooverDiv> 
                     </div>  
                    

        
                      
                                    
             
                    )}
            </div>
        )
        
    }
    
   
}

const photoCardStyle: CSSProperties = {
    display: "flex",
    flexWrap: "wrap"
}



export default PhotoCard;
