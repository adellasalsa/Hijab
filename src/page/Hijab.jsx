import React, { Component } from "react";
import Navbar from "../component/Navbar";
import { Row, Col, Container } from "reactstrap";
import Deskripsi from "../component/Deskripsi";
export default class Hijab extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <h2>Hijab Collection</h2>
        <Container>
          <Row>
            <Col md="6">
              <img
                src="https://img.berrybenka.biz/assets/upload/product/zoom/270994_nawa-apr-square-navy_blue_Q7PXO.jpg"
                width="100%"
                height="700px"
                alt=""
              />
            </Col>
            <Col md="6">
              <Deskripsi />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
