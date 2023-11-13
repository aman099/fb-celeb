import "./SocialMedia.styles.css";

import grid_3_pic from "../../assets/img/insta-pics/grid-3-pic.jpg";
import insta_9_Pic from "../../assets/img/insta-pics/insta-9.jpg";
import insta_8_Pic from "../../assets/img/insta-pics/insta-8.jpg";
import insta_7_Pic from "../../assets/img/insta-pics/insta-7.jpg";
import insta_6_Pic from "../../assets/img/insta-pics/insta-6.jpg";
import insta_5_Pic from "../../assets/img/insta-pics/insta-5.jpg";
import insta_4_Pic from "../../assets/img/insta-pics/insta-4.jpg";
import insta_3_Pic from "../../assets/img/insta-pics/insta-3.jpg";
import insta_2_Pic from "../../assets/img/insta-pics/insta-2.jpg";
import insta_1_Pic from "../../assets/img/insta-pics/insta-1.jpg";
import proPic from "../../assets/img/insta-pics/pro-pic.jpg";
import InstaPics from "./InstaPics";

const instaPicsInfo = [
  {
    id: 1,
    img: insta_1_Pic,
    likes: 20,
  },
  {
    id: 2,
    img: insta_2_Pic,
    likes: 51,
  },
  {
    id: 3,
    img: insta_3_Pic,
    likes: 184,
  },
  {
    id: 4,
    img: insta_4_Pic,
    likes: 61,
  },
  {
    id: 5,
    img: insta_5_Pic,
    likes: 169,
  },
  {
    id: 6,
    img: insta_6_Pic,
    likes: 249,
  },
  {
    id: 7,
    img: insta_7_Pic,
    likes: 96,
  },
  {
    id: 8,
    img: insta_8_Pic,
    likes: 55,
  },
  {
    id: 9,
    img: insta_9_Pic,
    likes: 374,
  },
];

function SocialMedia() {
  return (
    <section className="sm">
      <div className="sm-container grid">
        <div className="grid-1">
          <div className="grid-1-container">
            <div className="grid-title">
              <div className="grid-title-container">
                <div className="title-1 flex">
                  <div className="pro-pic">
                    <a
                      href="https://www.instagram.com/fb.celebrations"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={proPic} alt="Profile pic" />
                    </a>
                  </div>
                  <div className="username-container">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://instagram.com/fb.celebrations"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="name">FB Celebrations</span>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://instagram.com/fb.celebrations"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="id">@fb.celebrations</span>
                    </a>
                  </div>
                </div>
                <div className="acc-info">
                  <div className="acc-details posts">
                    <span className="num">902</span>
                    <span className="det">Posts</span>
                  </div>
                  <div className="acc-details followers">
                    <span className="num">9.2K</span>
                    <span className="det">Followers</span>
                  </div>
                  <div className="acc-details following">
                    <span className="num">202</span>
                    <span className="det">Following</span>
                  </div>
                </div>
                <div className="follow-btn">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://www.instagram.com/fb.celebrations"
                  >
                    <button className="insta-icon">
                      <i className="fa-brands fa-instagram fa-lg"></i>
                      <p>Follow</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-body">
              <div className="grid-body-container">
                <div className="body-pics">
                  <InstaPics instaPicsInfo={instaPicsInfo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-2 empty"></div>
        <div className="grid-3">
          <div className="grid-3-container">
            <img src={grid_3_pic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
