import { useState } from 'react';
import './Buttonstyle.css'
import Sidebar from './Sidebar';



interface Props {
  imageData: {
    alt_description: string
  }
  children: React.ReactNode;
}

export default function HooverDiv(props: Props) {
 const [show, setShow] = useState(false)
  
    return (
      <div className="HooverDiv hoover-div absolute w-100 bg-black-20 center tc white shadow-5">
        <div className=" br3" onClick={() => console.log("apa")}>
          <p>{props.imageData.alt_description}</p>
          
        </div>
        <div>
          <button className="bg-black-10 bn br-pill pa1 white" onClick={()=>setShow(!show)}>{show ? ' Hide comments ' : ' Show comment section '}</button>
          { show && 
        <Sidebar></Sidebar> }
      </div>
      </div>
    );
  }
  
 
  