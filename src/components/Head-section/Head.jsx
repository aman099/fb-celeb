import "./Head.styles.css";
import { useInView } from "react-intersection-observer";

import SpinningLogoBorder from "../../assets/img/right-logo-spinning-border.png";
import RightLogo from "../../assets/img/head-right-logo(center).gif";

function Head() {
  const { ref: rightFadeRef, inView: rightFadeParaInView } = useInView();

  return (
    <header className="head">
      <div className="head-container">
        <div className="right">
          <div className="right-container">
            <span
              className={`logo-border ${rightFadeParaInView ? "visible" : ""}`}
            >
              <img
                className="rotation"
                src={SpinningLogoBorder}
                alt="Spinning Border Design"
                id="rotation"
              />
              <img id="celeb-logo" src={RightLogo} alt="Website logo" />
            </span>
          </div>
        </div>
        <div className="left">
          <div className="left-container">
            <div
              className={`front-fade ${rightFadeParaInView ? "visible" : ""}`}
            >
              <h1>Magical</h1>
              <h2>celebrations</h2>
            </div>
            <div
              className={`right-fade ${rightFadeParaInView ? "visible" : ""}`}
            >
              <p ref={rightFadeRef}>
                We are a holistic event management company which curates bespoke
                experiences for discerning patrons bringing their dreams to
                reality. With a cumulative experience of over two decades in
                luxury event planning, we bring forth unique concepts, solid
                technical know-how and unbridled creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Head;
