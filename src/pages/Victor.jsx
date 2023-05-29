import { useOutletContext } from "react-router-dom";
import img from "../assets/crew/image-victor-glover.png";

import React from "react";

function Victor() {
  const { crew } = useOutletContext();

  return (
    <div className="crew-info">
      <img src={img} alt="portrait" className="crew-img" />
      <div className="crew-text">
        <h2>{crew[2].role}</h2>
        <h3>{crew[2].name}</h3>
        <p>{crew[2].bio}</p>
      </div>
    </div>
  );
}

export default Victor;
