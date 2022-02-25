import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/SIdebar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import './App.css';
import HooverDiv from "./components/HooverDiv";
function App() {
  return (
    <>
    <Header></Header>
    <SearchBar></SearchBar>
      <Main/>
      <Sidebar/>
      <HooverDiv/>
      
      
      
      
    </>
  );
}

export default App;
