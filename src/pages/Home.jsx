import React from "react";
import { Link } from "react-router-dom";
// import bgImage from "../assets/home/background-home-desktop.jpg";

function Home() {
  // document.body.style.backgroundImage = `url(${bgImage})`;
  return (
    <div className="home-container">
      <div className="home-container-text">
        <h1>so, you want to travel to</h1>
        <h1>
          <span>space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination" className="button-link">
        explore
      </Link>
    </div>
  );
}

export default Home;
