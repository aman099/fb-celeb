import React, { useState } from "react";
import "./Navigation.styles.css";

import NavLogo from "../../assets/img/fb-celeb-nav-logo.png";
import Sidemenu from "../Sidemenu/Sidemenu";

function Navigation() {
  const [menuIconClicked, setMenuIconClicked] = useState(false);

  const popSidebarHandler = () => {
    setMenuIconClicked((clicked) => !clicked);
  };

  return (
    <>
      <nav className="navigation-container sticky">
        <div className="icons">
          <div className="icons-container">
            <span className="icon phone">
              <i className="fa-solid fa-phone fa-lg"></i>
            </span>
            <span className="icon whatsapp">
              <i className="fa-brands fa-whatsapp fa-lg"></i>
            </span>
            <span className="icon fb">
              <i className="fa-brands fa-facebook fa-lg"></i>
            </span>
            <span className="icon insta">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </span>
          </div>
        </div>
        <div className="logo">
          <div className="logo-container">
            <img src={NavLogo} alt="Logo pic" />
          </div>
        </div>
        <div className="menu">
          <div className="menu-container">
            <h4>Menu</h4>
            <div className="menu-icon" onClick={() => popSidebarHandler()}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
      <Sidemenu
        menuIconClicked={menuIconClicked}
        setMenuIconClicked={setMenuIconClicked}
      />
    </>
  );
}

export default Navigation;
