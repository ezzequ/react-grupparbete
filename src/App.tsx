import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/SIdebar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header"
import './App.css';

function App() {
  return (
    <>
    <Header />
    {/* <UserContext.Provider value={}> */}
      <SearchBar />
      <Main/>
      <Sidebar />
    {/* </UserContext.Provider > */}
      
 
    </>
  );
}

export default App;
