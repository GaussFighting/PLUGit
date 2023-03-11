import React from "react";
import { Row, Col } from "reactstrap";
import Offer from "./Offer";
import bulbs from "../styles/images/bulb.jpg";
import lamps from "../styles/images/factoryLamps.jpg";
import wires from "../styles/images/wires.jpg";

const Offers = () => {
  return (
    <div>
      <div className="pl-4">
        <h1>OFERTA</h1>
      </div>
      <div id="offer" className="pt-4">
        <Row className="row justify-content-md-center">
          <Col className="card" lg={4}>
            <Offer
              src={wires}
              title={"PRZEWODY"}
              description={[
                "kable energetyczne",
                "przewody instalacyjne",
                "przewody telefocznine",
                "przewody sygnalizacyjne",
                "przewody teleinformatyczne",
                "przewody sterownicze",
                "przewody zgodne z normą kolejową",
              ]}
            />
          </Col>{" "}
          <Col className="card" lg={4}>
            <Offer
              src={lamps}
              title={"ŹRÓDŁA ŚWIATŁA"}
              description={[
                "żarówki, świetlówki liniowe",
                "świetlówki kompatkowe",
                "lampy wyładowcze, halogenowe",
                "lampy sodowe, rtęciowe",
                "lampy specjalistyczne",
                "baterie, latarki, akumulatory",
              ]}
            />
          </Col>
          <Col className="card" lg={4}>
            <Offer
              src={bulbs}
              title={"OŚWIETLENIE"}
              description={[
                "oprawy uliczne, parkowe",
                "oprawy biurowe",
                "oprawy magazynowe, przemysłowe",
                "oprawy awaryjne, oprawy rastrowe",
                "oprawy mieszkaniowe",
                "systemy świetlne",
                "słupy oświetleniowe",
              ]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Offers;
