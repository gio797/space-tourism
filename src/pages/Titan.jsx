import React from "react";
import { useOutletContext } from "react-router-dom";
import img from "../assets/destination/image-titan.png";

function Titan() {
  const { destinations } = useOutletContext();

  return (
    <div className="dest-info">
      <img src={img} alt="" className="dest-image" />
      <div className="dest-text">
        <h1>{destinations[3].name}</h1>
        <p>{destinations[3].description}</p>
        <hr />
        <h2>
          avg. distance <span>{destinations[1].distance}</span>
        </h2>
        <h2>
          est. travel time <span>{destinations[1].travel}</span>
        </h2>
      </div>
    </div>
  );
}

export default Titan;
