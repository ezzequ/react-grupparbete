import Header from "./components/Header";
import React, { Component } from "react";
import Main from "./components/Main";
import "./App.css";

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
    <Header></Header>
      <Main />
    </>
  );
}

}
 

export default App;