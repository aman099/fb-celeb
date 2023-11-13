import React from "react";
import "./Follow.styles.css";
import { useInView } from "react-intersection-observer";

function Follow() {
  const { ref: followHeadingRef, inView: followHeadingInView } = useInView();
  const { ref: disclaimerParaRef, inView: disclaimerParaInView } = useInView();

  return (
    <section className="follow">
      <div className="follow-container">
        <div ref={followHeadingRef} className="follow-heading">
          <h2 className={`${followHeadingInView ? "visible" : ""}`}>follow</h2>
        </div>
        <div className={`address ${followHeadingInView ? "visible" : ""}`}>
          <div className="address-container">
            <div className="mob-num">
              <p>+91 8779 797 334</p>
              <i className="fa-solid fa-phone fa-lg"></i>
            </div>
            <div className="mail-id">
              <p>info@fbcelebrations.com</p>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
          <div className="personal-logos">
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
      </div>
      <div className="market-address">
        <p>
          B-102, Jolly Maker Apartments,
          <br />
          Cuffe Parade, Mumbai -400005
        </p>
      </div>
      <div className="disclaimer">
        <p
          ref={disclaimerParaRef}
          className={`${disclaimerParaInView ? "visible" : ""}`}
        >
          The Website and its content, features and functionality, including,
          without limitation, information, software, text, graphics, logos,
          button icons, images, audio clips, video clips, data compilations and
          the design, selection and arrangement thereof, are the exclusive
          property of Farid & Bhavnesh. Farid & Bhavnesh own and control all the
          copyright and other intellectual property rights on our website and
          the material on our website and all the copyright and other
          intellectual property rights on our website and the material on our
          website are reserved and are protected by Indian and international
          copyright, trademark, patent, trade secret and other intellectual
          property or proprietary rights laws, and may not be used or exploited
          in any way without our prior written consent. In addition to the
          intellectual property rights mentioned above, for purposes “content”
          is defined as all information such as the “look and feel” of the
          website, data files, graphics, text, photographs, drawings, logos,
          images, sounds, music and video and audio files on the website.
        </p>
      </div>
    </section>
  );
}

export default Follow;
