import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { crewData } from "../data";
import bgDesk from "../assets/crew/background-crew-desktop.jpg";
import bgMob from "../assets/crew/background-crew-mobile.jpg";

function CrewLayout() {
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

  const [crew, setCrew] = useState(crewData);

  return (
    <div className="crew-container">
      <h1 className="crew-container-header">02 meet your crew</h1>
      <div className="crew-links">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Douglas
        </NavLink>
        <NavLink
          to="mark"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          mark
        </NavLink>
        <NavLink
          to="victor"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          victor
        </NavLink>
        <NavLink
          to="anousheh"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          anousheh
        </NavLink>
      </div>
      <Outlet context={{ crew }} />
    </div>
  );
}

export default CrewLayout;
