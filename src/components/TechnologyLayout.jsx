import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { technologyData } from "../data";
import bgDesk from "../assets/technology/background-technology-desktop.jpg";
import bgMob from "../assets/technology/background-technology-mobile.jpg";

function TechnologyLayout() {
  const [technology, setTechnology] = useState(technologyData);

  useEffect(() => {
    changeBg();
  }, []);

  function changeBg() {
    if (window.innerWidth < 900) {
      document.body.style.backgroundImage = `url('${bgMob}')`;
    } else {
      document.body.style.backgroundImage = `url('${bgDesk}')`;
    }
  }

  window.addEventListener("resize", changeBg);

  const activeStyle = {
    textDecoration: "underline",
    color: "#FFFFFF",
  };

  return (
    <>
      <div className="technology-container">
        <h1 className="tech-container-header">03 space launch 101</h1>
        <div className="tech-links">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            launch vehicle
          </NavLink>
          <NavLink
            to="spaceport"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            spaceport
          </NavLink>
          <NavLink
            to="spacecapsule"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            space capsule
          </NavLink>
        </div>
      </div>
      <Outlet context={{ technology }} />
    </>
  );
}

export default TechnologyLayout;
