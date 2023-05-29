import { useOutletContext } from "react-router-dom";
import img from "../assets/crew/image-douglas-hurley.png";

import React from "react";

function Douglas() {
  const { crew } = useOutletContext();
  console.log(crew);

  return (
    <div className="crew-info">
      <img src={img} alt="portrait" className="crew-img" />
      <div className="crew-text">
        <h2>{crew[0].role}</h2>
        <h3>{crew[0].name}</h3>
        <p>{crew[0].bio}</p>
      </div>
    </div>
  );
}

export default Douglas;
