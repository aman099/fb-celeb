import React from "react";
import "./Celebration.styles.css";
import { useInView } from "react-intersection-observer";

function Celebration() {
  const { ref: celebTitleRef, inView: celebTitleInView } = useInView();
  const { ref: celebParaRef, inView: celebParaInView } = useInView();

  return (
    <main className="celeb">
      <div className="blurred-logo"></div>
      <div className="celeb-container">
        <div ref={celebTitleRef} className="celeb-title">
          <h2 className={`${celebTitleInView ? "visible" : ""}`}>
            Celebrations
          </h2>
        </div>
        <div
          ref={celebParaRef}
          className={`celeb-para ${celebParaInView ? "visible" : ""}`}
        >
          <p>
            Each experience is tailored for the couple getting married, with the
            host's personal preferences and brand value taken into
            consideration. Understanding what best symbolizes "you" is a crucial
            part of the ideation process. Our team collaborates with the client
            to provide designs and experiences that are meticulously created to
            leave guests speechless <br />
            and clamoring for more.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Celebration;
