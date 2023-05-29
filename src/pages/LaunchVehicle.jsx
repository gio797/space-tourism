import React from "react";
import { useOutletContext } from "react-router-dom";
import img from "../assets/technology/image-launch-vehicle-landscape.jpg";

function LaunchVehicle() {
  const { technology } = useOutletContext();

  return (
    <div className="tech-info">
      <div>
        <img src={img} alt="" className="tech-image" />
      </div>
      <div className="tech-text">
        <h2>the terminology</h2>
        <h3>{technology[0].name}</h3>
        <p>{technology[0].description}</p>
      </div>
    </div>
  );
}

export default LaunchVehicle;
