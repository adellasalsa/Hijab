import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
export default class Cards extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Card>
                <CardImg
                  top
                  width="50%"
                  src="https://img.berrybenka.biz/assets/upload/product/zoom/269776_hanami-square-voile-cotton-in-olive_green_3IQJY.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Hijab Collection</CardTitle>
                  <Link to="/about/hijab">
                    <Button>Lihat</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  top
                  width="50%"
                  src="https://img.berrybenka.biz/assets/upload/product/zoom/187060_dress-mahya-grey-spesial-for-hijabenka_gainsboro_L7B0S.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Dress Collection</CardTitle>
                  <Link to="/about/dress">
                    <Button>Lihat</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  top
                  width="50%"
                  src="https://img.berrybenka.biz/assets/upload/product/zoom/159131_mukena-khadeejah-hijabenka-exclusive-maryam-warm-pink-two-tone_hot-pink_PQ1E5.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Mukena Collection</CardTitle>
                  <Link to="/about/mukena">
                    <Button>Lihat</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
