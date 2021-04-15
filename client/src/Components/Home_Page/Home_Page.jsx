import React from "react";
import "./Home_Page.scss";
import demo_img from "../../Assets/Lace It up (2).png";
import store_img from "../../Assets/Lace It up (3).png";

function Home_Page() {
  return (
    <div className="home">
      <div className="home__intro">
        <h2 className="home__title">
          Welcome to Lace It Up, where our mission is to make laces less
          annoying!
        </h2>
      </div>
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
