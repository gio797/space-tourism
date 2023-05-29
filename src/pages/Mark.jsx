import { useOutletContext } from "react-router-dom";
import img from "../assets/crew/image-mark-shuttleworth.png";

import React from "react";

function Mark() {
  const { crew } = useOutletContext();

  return (
    <div className="crew-info">
      <img src={img} alt="portrait" className="crew-img" />
      <div className="crew-text">
        <h2>{crew[1].role}</h2>
        <h3>{crew[1].name}</h3>
        <p>{crew[1].bio}</p>
      </div>
    </div>
  );
}

export default Mark;
