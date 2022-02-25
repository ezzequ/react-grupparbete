import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <Main />
      <Sidebar />
    </>
  );
}

export default App;
