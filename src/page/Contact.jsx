import React, { Component } from "react";
import Navbars from "../component/Navbar";
import Jumbotrons from "../component/Jumbotron";
import "../asset/style.css";
import Cards from "../component/Card";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Jumbotrons />
        <Cards />
      </div>
    );
  }
}
