import React, { Component } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
//import cheerio from "cheerio";
//import request from "request";
import "./App.css";

class App extends Component {

  state= {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Jumbotron></Jumbotron>
        <div className="container">
          <Search></Search>
          <Results></Results>
          <Saved></Saved>
        </div>
      </div>
    );
  }
}

export default App;
