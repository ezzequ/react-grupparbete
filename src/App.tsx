import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import './App.css';
import HooverDiv from "./components/HooverDiv";
import UserProfile from "./components/UserProfile";
import UserContext from "./contexts/UserContext";



function App() {
  return (
    <>
    <Header />
    {/* <UserContext.Provider value={}> */}
      <SearchBar />
      <Main/>
      <Sidebar />
    {/* </UserContext.Provider > */}
      
  
 
      <HooverDiv/>
    </>
  );
}

export default App;
