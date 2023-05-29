import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    textDecoration: "underline",
    color: "#FFFFFF",
  };

  const [click, setClick] = useState(false);
  const [menuBtn, setMenuBtn] = useState();

  function closeMenu() {
    setClick(false);
  }

  function toggleMenuBtn() {
    window.addEventListener("resize", () => {
      if (innerWidth > 900) {
        setMenuBtn(false);
        setClick(false);
      } else {
        setMenuBtn(true);
      }
    });
  }

  useEffect(() => {
    toggleMenuBtn();
  }, []);

  return (
    <header>
      <Link className="site-logo" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </Link>

      <nav>
        <div className={click ? "nav-items active" : "nav-items"}>
          <NavLink
            className={"nav-links"}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={closeMenu}
          >
            00 home
          </NavLink>
          <NavLink
            className={"nav-links"}
            to="destination"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={closeMenu}
          >
            01 destination
          </NavLink>
          <NavLink
            className={"nav-links"}
            to="crew"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={closeMenu}
          >
            02 crew
          </NavLink>
          <NavLink
            className={"nav-links"}
            to="technology"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={closeMenu}
          >
            03 technology
          </NavLink>
        </div>

        {menuBtn && (
          <div className="menu-btn" onClick={() => setClick((prev) => !prev)}>
            {click ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
              </svg>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
