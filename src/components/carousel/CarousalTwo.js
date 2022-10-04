import React from "react";
import "./carasole.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import "../home/home.css";
import { Button, Card, CardImg, Spinner } from "react-bootstrap";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
const CarousalTwo = ({ title }) => {
  console.log("props.title", title);
  return (
    <div className="carasoule_main col-lg-12">
      <Carousel interval="3000">
        {title.map((item) => {
          return (
            <Carousel.Item>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Explore</Button>
              </Card.Body>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarousalTwo;
