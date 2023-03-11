import React, { useState } from "react";
import { Collapse, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Box from "../components/Box.js";

const Offer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Card
      color="warning"
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={props.src} />
      <CardBody>
        <div onClick={toggle}>
          <CardTitle tag="h5">{props.title}</CardTitle>
        </div>
        <Collapse
          isOpen={isOpen}
          style={{ height: "33vw", maxHeight: "230px" }}
        >
          <CardText>
            <ul>
              {" "}
              {props.description.map((point, idx) => {
                return <li key={idx}>{point}</li>;
              })}
            </ul>
          </CardText>
        </Collapse>
      </CardBody>
    </Card>
  );
};
export default Offer;
