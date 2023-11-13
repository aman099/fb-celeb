import React from "react";
import "./Media.styles.css";
import MediaLogo from "./MediaLogo";

import titleUnderlineImg from "../../assets/img/brdr.png";
import { useInView } from "react-intersection-observer";

import vogueImg from "../../assets/img/footer-logos/vogue.png";
import pinkvillaImg from "../../assets/img/footer-logos/pinkvilla.png";
import dainikBhaskarImg from "../../assets/img/footer-logos/dainik-bhaskar.png";
import midDayImg from "../../assets/img/footer-logos/midday.png";
import weddingSutraImg from "../../assets/img/footer-logos/wedding-sutra.png";
import economicTimesImg from "../../assets/img/footer-logos/economic-times.png";
import globlePrimeNewsImg from "../../assets/img/footer-logos/global-prime-news.png";
import theTimesImg from "../../assets/img/footer-logos/The-Times.png";
import theIndianExpressImg from "../../assets/img/footer-logos/the-indian-express.png";
import news18Img from "../../assets/img/footer-logos/news-18.png";
import mumbaiMirrorImg from "../../assets/img/footer-logos/mumbai-mirror.png";
import feminaImg from "../../assets/img/footer-logos/femina.png";
import deccanChronicleImg from "../../assets/img/footer-logos/deccan-chronicle.png";
import deccanHeraldImg from "../../assets/img/footer-logos/Deccan-Herald.png";
import dwpinsiderImg from "../../assets/img/footer-logos/dwpinsider.png";

const mediaLogos = [
  {
    id: 1,
    img: vogueImg,
    alt: "Vogue brand logo",
  },
  {
    id: 2,
    img: pinkvillaImg,
    alt: "Pinkvilla brand logo",
  },
  {
    id: 3,
    img: dainikBhaskarImg,
    alt: "Dainik Bhaskar brand logo",
  },
  {
    id: 4,
    img: midDayImg,
    alt: "Mid day brand logo",
  },
  {
    id: 5,
    img: weddingSutraImg,
    alt: "Wedding sutra brand logo",
  },
  {
    id: 6,
    img: economicTimesImg,
    alt: "Enonomic Times brand logo",
  },
  {
    id: 7,
    img: globlePrimeNewsImg,
    alt: "Global Prime news brand logo",
  },
  {
    id: 8,
    img: theTimesImg,
    alt: "The Times brand logo",
  },
  {
    id: 9,
    img: theIndianExpressImg,
    alt: "The Indian Express brand logo",
  },
  {
    id: 10,
    img: news18Img,
    alt: "News18 brand logo",
  },
  {
    id: 11,
    img: mumbaiMirrorImg,
    alt: "Mumbai Mirror brand logo",
  },
  {
    id: 12,
    img: feminaImg,
    alt: "Femina brand logo",
  },
  {
    id: 13,
    img: deccanChronicleImg,
    alt: "Deccan Chronicle brand logo",
  },
  {
    id: 14,
    img: deccanHeraldImg,
    alt: "Deccan Herald brand logo",
  },
  {
    id: 15,
    img: dwpinsiderImg,
    alt: "DWP Insider brand logo",
  },
];

function Media() {
  const { ref: mediaTitleRef, inView: mediaTitleInView } = useInView();

  return (
    <section className="media">
      <div className="media-container">
        <div ref={mediaTitleRef} className="media-title">
          <h2 className={`${mediaTitleInView ? "visible" : ""}`}>media</h2>
          <img src={titleUnderlineImg} alt="Title Underline" />
        </div>
        <div className="media-logos">
          <div
            className={`media-logos-container ${
              mediaTitleInView ? "animate" : ""
            }`}
          >
            {/* needs to be Mapped */}
            <MediaLogo mediaLogos={mediaLogos} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
