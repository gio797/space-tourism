import React from "react";
import { useOutletContext } from "react-router-dom";
import img from "../assets/destination/image-europa.png";

function Europa() {
  const { destinations } = useOutletContext();

  return (
    <div className="dest-info">
      <img src={img} alt="" className="dest-image" />
      <div className="dest-text">
        <h1>{destinations[2].name}</h1>
        <p>{destinations[2].description}</p>
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

export default Europa;
