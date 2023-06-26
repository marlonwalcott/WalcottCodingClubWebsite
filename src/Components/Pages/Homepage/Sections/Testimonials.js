import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="container">
      <div class="testimonial-top">
        Learn Game Development & Prompt Engineering!
      </div>
      <div className="testimonial-centerdiv testimonial-text-151b2b testimonial-f-46 testimonial-f-w-400 testimonial-mx-650 testimonial-margin-top-90">
        Our Goal SI Simple. Learn To Building A Game.
        {"  "}
        <span className="voiceline2">
          Then Have A Blast Engineering Solutions In Our Innovation Pods!
        </span>
      </div>

      <div
        className="wistia_responsive_padding"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <div className="wistia_responsive_wrapper">
          <div
            className="wistia_embed wistia_async_31ygjslv5c"
            style={{ height: "100%", position: "relative", width: "100%" }}
          >
            <div
              className="wistia_swatch"
              style={{
                height: "100%",
                left: 0,
                opacity: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                transition: "opacity 200ms",
                width: "100%",
              }}
            >
              <img
                src="https://fast.wistia.com/embed/medias/u9qnvq6g5/swatch"
                style={{
                  filter: "blur(5px)",
                  height: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
                alt=""
                aria-hidden="true"
                onLoad={(e) => (e.target.parentNode.style.opacity = 1)}
              />
            </div>
            <div class="testimonial-top">
              WCC Provides Clarity & Speed To Learn{" "}
            </div>

            <div className="testimonial-centerdiv testimonial-text-151b2b testimonial-f-46 testimonial-f-w-400 testimonial-mx-650 testimonial-margin-top-90">
              Coding Alone Can Be Scary & Confusing But At
              {"  "}
              <span className="voiceline2">
                The Walcott Coding Club Provides Clarity By Connecting The Dots
                For All Ages!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
