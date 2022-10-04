import React from "react";
import "./home.css";
import Carouselo from "../carousel/Carousel";
import { Button, Card, CardImg, Spinner } from "react-bootstrap";
import CarousalTwo from "../carousel/CarousalTwo";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
const title = [
  {
    name: "wildlife",
  },
  {
    name: "Panther",
  },
  {
    name: "Grey Wolf",
  },
  {
    name: "White wolf",
  },
  {
    name: "wildlife",
  },
  {
    name: "Panther",
  },
  {
    name: "Grey Wolf",
  },
  {
    name: "White wolf",
  },
];

const data = [
  {
    pic: pic1,
  },
  {
    pic: pic2,
  },
  {
    pic: pic3,
  },
];
const Home = () => {
  return (
    <div className="home_main">
      <div className="sub_main d-flex justify-content-around">
        {title.map((elem) => (
          <Card className="card_main" style={{ width: "18rem" }}>
            <Carouselo data={data} />
            <CarousalTwo title={title} />
          </Card>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
