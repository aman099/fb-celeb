import React from "react";
import "./About.styles.css";
import { useInView } from "react-intersection-observer";

import Profile1Img from "../../assets/img/profile-1.jpg";
import Profile2Img from "../../assets/img/profile-2.jpg";

function About() {
  const { ref: aboutContainerRef, inView: aboutContainerInView } = useInView();
  const { ref: profile2ContainerRef, inView: profile2ContainerInView } =
    useInView();

  return (
    <article className="about">
      <div ref={aboutContainerRef} className="about-container">
        <div className={`about-left ${aboutContainerInView ? "visible" : ""}`}>
          <div className="left-container visible">
            <h2>About Us</h2>
            <p>Founded by Farid Khan and Bhavnesh Sawhney,</p>
            <p>
              FB Celebrations curates bespoke experiences for its discerning
              patrons. Our body of work remains impressive across the board. The
              Melbourne Handover Ceremony in 2006, National Games in Hyderabad
              in 2002, Commonwealth Games – India in 2010, IIFA Awards from
              2004-2019, 65th Filmfare Guwahati in 2020, Filmfare Achievers
              Night – Middle East in 2021, seeing through Jennifer Lopez and
              Nicole Scherzinger's performance in Hinduja Wedding in 2015 to
              Nidhi Dutta’s and Sonam Kapoor’s Wedding - are some of the events
              that stand out historically.
            </p>
            <a href="#">
              <button>Know More</button>
            </a>
          </div>
        </div>
        <div className={`about-right ${aboutContainerInView ? "visible" : ""}`}>
          <div className="right-container">
            <div className="profile-container">
              <div
                className={`img-container ${
                  aboutContainerInView ? "visible" : ""
                }`}
              >
                <img src={Profile1Img} alt="Profile 1" />
              </div>
              <div
                className={`text-container ${
                  aboutContainerInView ? "visible" : ""
                }`}
              >
                <h2>Farid</h2>
                <h3>Khan</h3>
              </div>
            </div>

            <div className="profile-container profile2">
              <div
                className={`text-container ${
                  profile2ContainerInView ? "visible" : ""
                }`}
              >
                <h2>Bhavnesh</h2>
                <h3>Sawhney</h3>
              </div>
              <div
                ref={profile2ContainerRef}
                className={`img-container ${
                  profile2ContainerInView ? "visible" : ""
                }`}
              >
                <img src={Profile2Img} alt="Profile 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default About;
