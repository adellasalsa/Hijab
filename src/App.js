import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import All from "./page/All";
import Hijab from "./page/Hijab";
import Dress from "./page/Dress";
import Mukena from "./page/Mukena";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about/hijab" component={Hijab} />
          <Route path="/about/dress" component={Dress} />
          <Route path="/about/mukena" component={Mukena} />
          <Route path="/contact" component={Contact} />
          <Route path="/all" component={All} />
        </div>
      </Router>
    );
  }
}

export default App;
