import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
// import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
// import HooverDiv from "./components/HooverDiv";


// import ButtonAdd from "./components/ButtonAdd";


function App() {
  return (
    <>
      <Main />
      <Sidebar />
      {/* <HooverDiv imageData={{
        alt_description: ""
      }} children={ButtonAdd} /> */}

    </>
  );
}

export default App;
