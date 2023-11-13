import React, { useRef } from "react";
import "./Sidemenu.styles.css";

import HeadLogo from "../../assets/img/head-right-logo(center).gif";

function Sidemenu({ menuIconClicked, setMenuIconClicked }) {
  const sidebarRef = useRef();

  return (
    <div
      ref={sidebarRef}
      className={`nav nav-black ${menuIconClicked ? "visible" : ""}`}
    >
      <div className={`nav nav-red ${menuIconClicked ? "visible" : ""}`}>
        <div className={`nav nav-white ${menuIconClicked ? "visible" : ""}`}>
          <button
            className="nav-btn close-btn"
            onClick={() => setMenuIconClicked(!menuIconClicked)}
          >
            <i className="fas fa-times"></i>
          </button>

          <img src={HeadLogo} alt="Logo" className="logo" />

          <ul className="list">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our&nbsp;Verticals</a>
            </li>
            <li>
              <a href="#">Building&nbsp;Moments</a>
            </li>
            <li>
              <a href="#">Awards</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Communicate</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
