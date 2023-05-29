import React from "react";
import { useOutletContext } from "react-router-dom";
import img from "../assets/technology/image-spaceport-landscape.jpg";

function Spaceport() {
  const { technology } = useOutletContext();

  return (
    <div className="tech-info">
      <div>
        <img src={img} alt="" className="tech-image" />
      </div>
      <div className="tech-text">
        <h2>the terminology</h2>
        <h3>{technology[1].name}</h3>
        <p>{technology[1].description}</p>
      </div>
    </div>
  );
}

export default Spaceport;
