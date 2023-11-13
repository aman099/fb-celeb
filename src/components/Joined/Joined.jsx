import React, { Fragment } from "react";
import "./Joined.styles.css";

import weddingImg from "../../assets/img/wedding.jpg";
import liveCelebImg from "../../assets/img/livecel.jpg";
import corpcelImg from "../../assets/img/corpcel.jpg";

function Joined() {
  return (
    <Fragment>
      <section className="joined">
        <div className="joined-container">
          <div className="right-joined">
            <div className="img-container social-celeb-img-container">
              <img
                src={weddingImg}
                alt="Social Celebrations by FBCelebrations"
              />
              <div className="border"></div>
            </div>
          </div>
          <div className="left-joined">
            <div className="text-container">
              <h2>Social</h2>
              <h3>celebrations</h3>
            </div>
            <div className="dotted social-celeb-dotted"></div>
            <div className="blurred-logo-2"></div>
          </div>
        </div>
      </section>

      <section className="joined joined-middle">
        <div className="joined-container">
          <div className="left-joined">
            <div className="text-container">
              <h2>Live</h2>
              <h3>celebrations</h3>
            </div>
            <div className="dotted right-dotted"></div>
          </div>
          <div className="right-joined">
            <div className="img-container live-concert-img-container">
              <img
                src={liveCelebImg}
                alt="Social Celebrations by FBCelebrations"
              />
              <div className="border"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="joined joined-end">
        <div className="joined-container">
          <div className="right-joined">
            <div className="img-container corporate-img-container">
              <img
                src={corpcelImg}
                alt="Social Celebrations by FBCelebrations"
              />
              <div className="border"></div>
            </div>
          </div>
          <div className="left-joined">
            <div className="text-container">
              <h2 className="corp-heading">Corporate</h2>
              <h3>celebrations</h3>
            </div>
            <div className="dotted left-dotted"></div>
            <div className="blurred-logo-2"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Joined;
