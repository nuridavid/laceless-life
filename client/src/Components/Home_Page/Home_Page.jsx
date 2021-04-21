import React from "react";
import "./Home_Page.scss";
import { Link, Button } from "react-router-dom";
import Toms_Shoe_Img from "../../Assets/toms shoes.jpeg";
import Adidas_Shoe_Img from "../../Assets/adidas shoes.webp";
import Nike_Phantom_Img from "../../Assets/nike-react-phantom-run-flyknit-2-white-black-cj0277-001-100-release-info-6.jpeg";
import { useState } from "react";

import { Jumbotron, Carousel } from "react-bootstrap";
import Demo_Page from "../Demo_Page/Demo_Page";

function Home_Page() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home">
      <Carousel activeIndex={index} onSelect={handleSelect} id="carousel">
        <Carousel.Item className="item">
          <img
            className="d-block image"
            src={Nike_Phantom_Img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Cut the crap, ditch the laces</h3>
            <button>Show me these shoes</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block  image2"
            src={Adidas_Shoe_Img}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Cut the crap, ditch the laces</h3>
            <button>Show me these shoes</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block  image3"
            src={Toms_Shoe_Img}
            alt="Toms shoes"
          />

          <Carousel.Caption>
            <h3>Cut the crap, ditch the laces</h3>
            <button>Show me these shoes</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Jumbotron className="jumbotron">
        <h1>Learn How to Tie Your Shoe</h1>

        <p>
          Below you can find our unique and one of a kind demo on how to tie
          your shoes!
        </p>

        <Link to="/demo">
          <button type="button" className="button">
            Watch Demo
          </button>
        </Link>
      </Jumbotron>
      <Jumbotron className="jumbotron2">
        <h1>Stores Near Me</h1>

        <p>
          Below you can find our unique and one of a kind demo on how to tie
          your shoes!
        </p>

        <Link to="/stores">
          <button type="button" className="button">
            Find Stores
          </button>
        </Link>
      </Jumbotron>

      <Jumbotron className="jumbotron3">
        <h1>Shop Laceless</h1>

        <p>
          Below you can find our unique and one of a kind demo on how to tie
          your shoes!
        </p>
        <Link to="/shoes">
          <button type="button" className="button">
            Watch Demo
          </button>
        </Link>
      </Jumbotron>
    </div>
  );
}

export default Home_Page;
