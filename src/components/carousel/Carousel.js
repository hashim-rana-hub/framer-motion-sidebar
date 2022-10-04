import React, { useState } from "react";
import "./carasole.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
const Carouselo = ({ data }) => {
  console.log("props.image", data);
  return (
    <div className="carasoule_main col-lg-12">
      <Carousel interval="3000">
        {data.map((item) => {
          return (
            <Carousel.Item>
              <img src={item.pic} width="100%" height="100%" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carouselo;
