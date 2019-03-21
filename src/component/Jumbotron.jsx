import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
export default class Jumbotrons extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="bg-jumbotron">
          <h1 className="display-3">Havana Hijab</h1>
          <p className="lead">
            Toko Online untuk Busana Muslim Modern, Berkualitas, Terbaru dan
            Trendy. Terlihat bagus, merasa baik. Temukan tren terbaru dalam
            fashion dan dapatkan inspirasi.
          </p>
          <hr className="my-2" />

          <p className="lead">
            <Button color="primary">Kunjungi</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
