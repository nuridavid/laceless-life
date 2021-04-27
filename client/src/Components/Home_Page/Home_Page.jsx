import React from "react";
import "./Home_Page.scss";
import { Link, Button } from "react-router-dom";
import Toms_Shoe_Img from "../../Assets/toms shoes.jpeg";
import Home_Video from "../../Assets/production ID_3804690.mp4";
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
      <video
        autoPlay
        loop
        muted
        style={{
          height: "100%",
          width: "300px",
          margin: "5rem 0 0 0",
          objectFit: "fill",
        }}
      >
        <source src={Home_Video} type="video/mp4" />
      </video>

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
        <h1>Stores Near You</h1>

        <p>Find stores Near you that have laceless shoes for sale.</p>

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
            Shop Shoes
          </button>
        </Link>
      </Jumbotron>
    </div>
  );
}

export default Home_Page;
