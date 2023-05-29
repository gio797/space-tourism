import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { technologyData } from "../data";

function TechnologyLayout() {
  const [technology, setTechnology] = useState(technologyData);

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
