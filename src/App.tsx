import React from "react";
import Main from "./components/Main";
import SIdebar from "./components/SIdebar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header"
import './App.css';
function App() {
  return (
    <>
    <Header></Header>
    <SearchBar></SearchBar>
    <SIdebar></SIdebar>
      <Main/>
     
      
    
    </>
  );
}

export default App;
