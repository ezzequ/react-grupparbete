import { Component } from "react";




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

interface Props {}
interface State {
    imagesData: any[];
}


class Main extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { imagesData: [] };
    }

    async componentDidMount() {
        const url = 'https://api.unsplash.com/search/photos?page=10&query=landscape';
        const response = await fetch(url, {
            headers: {
                "authorization": "Client-ID atOI9pA6vM7-48sURp4sfveE-vt7pSu99waKjQ5GWUc"
            }
        });
        const data: ImageData[] = (await response.json()).results; 
        this.setState({ imagesData: data});
    }
    
    render() {
        console.log(this.state);
      return(
          
        <main className="fr w-100 pa2">
            {this.state.imagesData.map(imageData => 
                <div className="bg-light-grey br1 grow ma1
                shadow-5 fr w-40  br3">
                    <img key={imageData.id} src={imageData.urls.regular} alt={imageData.alt_description} className="br3 w-100" />
                </div>
                )}
        </main>
        );  
    }
}

export default Main;