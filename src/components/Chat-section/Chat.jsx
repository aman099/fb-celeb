import React from "react";
import "./Chat.styles.css";
import { useInView } from "react-intersection-observer";

function Chat() {
  const { ref: chatLeftRef, inView: charLeftInView } = useInView();

  return (
    <section className="chat">
      <div className="chat-container">
        <div
          ref={chatLeftRef}
          className={`chat-left ${charLeftInView ? "visible" : ""}`}
        >
          <div className="chat-title">
            <h3>let's</h3>
            <h2 className={`chat-pop ${charLeftInView ? "visible" : ""}`}>
              Chat
            </h2>
            <p>
              <span>
                We would love to get to know more <br />
                and talk about your celebration.
              </span>
            </p>
          </div>
          <button className="chat-btn">Get in touch</button>
        </div>
        <div className="chat-right"></div>
      </div>
    </section>
  );
}

export default Chat;
