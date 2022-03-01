import { Component, CSSProperties } from "react";
import ButtonAdd from "./ButtonAdd";
import HooverDiv from "./HooverDiv";
import "./HooverDiv.css";
import "./photoCard.css";
//import InfiniteScroll from "react-infinite-scroll-component";

interface Props {}
interface State {
  imagesData: any[];
}

interface ImageData {
  alt_description: "white modern cement building under blue sky";
  id: "RFDP7_80v5A";
  liked_by_user: false;
  imgHeight: number;
  urls: {
    full: string;
    raw: string;
    regular: string;
  };
}

class PhotoCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { imagesData: [] };
  }

  async componentDidMount() {
    const url =
      "https://api.unsplash.com/search/photos?page=10&per_page=30&query=landscape";
    const response = await fetch(url, {
      headers: {
        authorization: "Client-ID atOI9pA6vM7-48sURp4sfveE-vt7pSu99waKjQ5GWUc",
      },
    });
    const data: ImageData[] = (await response.json()).results;
    this.setState({ imagesData: data });
    console.log(data[0]);
  }

  render() {
    return (
      <div style={photoContainerStyle}>
        {this.state.imagesData.map((imageData) => (
          <div
            key={imageData.id}
            className="photo-card bg-light-grey br1 ma1 shadow-5 grow fr br3"
          >
            <HooverDiv
              imageData={{
                alt_description: imageData.alt_description,
              }}
              children={ButtonAdd}
            ></HooverDiv>
            <img
              src={imageData.urls.regular}
              alt={imageData.alt_description}
              className="br3 w-100"
            />
          </div>
        ))}
      </div>
    );
  }
}

 console.log();
 const photoContainerStyle: CSSProperties = {
   width: "100%",
   height: "100vh",
   display: "grid",
   gridTemplateColumns: "repeat(auto-fill, 20rem [col-start])",
   gridAutoRows: "",
   justifyContent: "center",
 };

export default PhotoCard;
