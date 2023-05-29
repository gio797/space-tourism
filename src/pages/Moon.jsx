import React from "react";
import { useOutletContext } from "react-router-dom";
import img from "../assets/destination/image-moon.png";

function Moon() {
  const { destinations } = useOutletContext();

  return (
    <div className="dest-info">
      <img src={img} alt="" className="dest-image" />
      <div className="dest-text">
        <h1>{destinations[0].name}</h1>
        <p>{destinations[0].description}</p>
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

export default Moon;
