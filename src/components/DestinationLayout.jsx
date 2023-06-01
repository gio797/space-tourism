import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { destinationsData } from "../data";
import bgDesk from "../assets/destination/background-destination-desktop.jpg";
import bgMob from "../assets/destination/background-destination-mobile.jpg";

function DestinationLayout() {
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

  const [destinations, setDestinations] = useState(destinationsData);

  return (
    <div className="destination-container">
      <h1 className="dest-container-header">01 pick your destination</h1>
      <div className="dest-links">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          moon
        </NavLink>
        <NavLink
          to="mars"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          mars
        </NavLink>
        <NavLink
          to="europa"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          europa
        </NavLink>
        <NavLink
          to="titan"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          titan
        </NavLink>
      </div>
      <Outlet context={{ destinations }} />
    </div>
  );
}

export default DestinationLayout;
