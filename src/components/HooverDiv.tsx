
import './Buttonstyle.css'
import ButtonAdd from "./ButtonAdd";
import PhotoCard from "./PhotoCard";


interface Props {
  imageData: {
    alt_description: string
  }
  children: React.ReactNode;
}

export default function HooverDiv(props: Props) {
 
  
    return (
      <div className="HooverDiv absolute relative">
        <div
          className="cover bg-black-50 hover-blue br3 center tc white shadow-5"
          onClick={() => console.log("apa")}
        >
          <p>{props.imageData.alt_description}</p>
          <ButtonAdd
            imageData={{
              alt_description: "",
            }}
            children={new PhotoCard(props)}
          />
          <hr className="bb bg-white white br2"></hr>
        </div>
      </div>
    );
  }
  
 
  