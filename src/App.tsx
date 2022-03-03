import React, { Component } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
// import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
// import HooverDiv from "./components/HooverDiv";


// import ButtonAdd from "./components/ButtonAdd";

interface Props {

};

interface State {
  searchQuery: any,
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchQuery: "land"
    }
  }

  render() {
     return (
    <>
     
      <Main />
      <Sidebar />

    </>
  );
}

}
 

export default App;