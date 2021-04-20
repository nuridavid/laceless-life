import React from "react";
import "./Home_Page.scss";
import Toms_Shoe_Img from "../../Assets/toms shoes.jpeg";
import Adidas_Shoe_Img from "../../Assets/adidas shoes.webp";
import Nike_Phantom_Img from "../../Assets/nike-react-phantom-run-flyknit-2-white-black-cj0277-001-100-release-info-6.jpeg";
import { useState } from "react";
import demo_img from "../../Assets/Lace It up (2).png";
import store_img from "../../Assets/Lace It up (3).png";
import { Jumbotron, Button, Carousel } from "react-bootstrap";

function Home_Page() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="item">
          <img
            className="d-block w-100 image"
            src={Nike_Phantom_Img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Cut the crap, ditch the laces</h3>
            <button>Show me these shoes</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={Adidas_Shoe_Img}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Cut the crap, ditch the laces</h3>
            <button>Show me these shoes</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={Toms_Shoe_Img}
            alt="Toms shoes"
          />

          <Carousel.Caption>
            <h3>Cut the crap, ditch the laces</h3>
            <button>Show me these shoes</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Jumbotron>
        <h1>Learn How to Tie Your Shoe</h1>
        <p>
          Below you can find our unique and one of a kind demo on how to tie
          your shoes!
        </p>
        <button className="button" href="/demo">
          Watch Demo
        </button>
      </Jumbotron>
      <div className="home__demo">
        <span className="home__demo-left">
          <h3 className="home__demo-left-title">Learn How to Tie Your Shoes</h3>
          <button className="button">Watch Demo</button>
        </span>
        <img className="home__demo-img" src={demo_img}></img>
      </div>
      <div className="home__store">
        <span className="home__store-right">
          <h3 className="home__store-right-title">
            Find Stores with Laceless Shoes
          </h3>
          <button className="button">Stores Near You</button>
        </span>
        <img className="home__store-img" src={store_img}></img>
      </div>
    </div>
  );
}

export default Home_Page;
