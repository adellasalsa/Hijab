import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
export default class Deskripsi extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>Hijab Collection</CardTitle>
                  <CardText>
                    Sempurnakan tampilanmu dengan hijab segi empat dengan warna
                    yang menarik. Padukan dengan inner dan blouse simple
                    berwarna netral.
                  </CardText>
                  <CardTitle>IDR 70.000</CardTitle>
                  <CardText>
                    <Row>
                      <Col md="2">warna</Col>
                      <Col md="10">Navy</Col>
                    </Row>
                    <Row>
                      <Col md="2">Ukuran</Col>
                      <Col md="10">One size</Col>
                    </Row>
                  </CardText>
                  <Button block>Beli</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
