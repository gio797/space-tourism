import { useOutletContext } from "react-router-dom";
import img from "../assets/crew/image-anousheh-ansari.png";

import React from "react";

function Anousheh() {
  const { crew } = useOutletContext();

  return (
    <div className="crew-info">
      <img src={img} alt="portrait" className="crew-img" />
      <div className="crew-text">
        <h2>{crew[3].role}</h2>
        <h3>{crew[3].name}</h3>
        <p>{crew[3].bio}</p>
      </div>
    </div>
  );
}

export default Anousheh;
