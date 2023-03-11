import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className=" py-5 contact navigation">
      {" "}
      <Row>
        <Col lg={4} md={12} className="contact-col pb-4">
          <div id="contact">
            <a href="mailto:biuro@plugit@gmail.com" className="fa-icons">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>{" "}
            <div className="contact-text"> E-mail: </div>
            <div className="contact-text"> biuro@plugit@gmail.com</div>
          </div>
        </Col>
        <Col lg={4} md={6} className="contact-col pb-4">
          <div>
            <a href="tel:+48662036051" className="fa-icons">
              <FontAwesomeIcon icon={faPhone} />
            </a>{" "}
            <div className="contact-text">Rafał Grzesiak: </div>
            <div className="contact-text"> + 48 662 036 051</div>
          </div>
        </Col>
        <Col lg={4} md={6} className="contact-col pb-4">
          <div>
            {" "}
            <a href="tel:+48505031037" className="fa-icons">
              <FontAwesomeIcon icon={faPhone} />
            </a>{" "}
            <div className="contact-text"> Adam Skrok: </div>
            <div className="contact-text"> + 48 505 031 037</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Contact;
