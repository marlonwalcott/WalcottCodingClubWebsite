import React, { useEffect } from "react";
import "./header.css";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector(".header_logoimage");
      const navbar = document.querySelector(".navbar");
      const scrollPos = window.scrollY;

      // Reduce logo size on scroll
      if (scrollPos > 45) {
        logo.style.maxWidth = "110px";
      } else {
        logo.style.maxWidth = "180px";
      }

      // Add animation to navbar background
      if (scrollPos > 2) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header_herobackground header_fullheight ">
      {/* This is the navigation bar section */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {/* This is the logo section in the navigation bar */}
          <img
            className="header_logoimage"
            src="https://res.cloudinary.com/dswjmtfun/image/upload/v1686418253/1_omsede.png"
            alt="background header"
          />

          {/* This is the 'Free Trial' button in the navigation bar */}
          <div className="navbar-text ms-auto mt-3">
            <a href="http://walcottcodingclub.com/signup/index.html">
              <button type="button" className="btn-primary btn-call-to-action">
                Free Trial
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* This is the main container for the hero section */}
      <div className="header_container header_containerinner header_containertop header_mt-5">
        {/* This is the row for the header text */}
        <div className="header_row header_justify-content-between">
          <div className="header_col-sm-12 header_col-lg-12 header_text-center">
            <h1 className="header_topheader  header_text-shadow-black header_highlights header-main">
              Create Games, IT Solutions, Robots & More
            </h1>

            <div className="header_text-center header_margin-35">
              <div className="header_f-500 header_f-23 header_text-shadow-black header_white-font header_second_lgfont header_second_width header_second_lgfont">
                Go From{" "}
                <span className="header_highlights">Gamers To Inventors</span>{" "}
                With <span className="header_highlights">Do-It-Yourself</span>{" "}
                Technology Projects
              </div>

              <div className="header_margin-15">
                <img
                  className="header_big-six-max-width"
                  alt="Get six new skills"
                  src="https://res.cloudinary.com/dswjmtfun/image/upload/v1685777180/Screenshot_2023-06-03_at_2.25.19_AM-removebg-preview_pgvjql.png"
                />
              </div>
              <div>
                <a href="http://walcottcodingclub.com/signup/index.html">
                  <button
                    className="btn2 btn-outline-secondary header_regularblubg header_btn-primary "
                    type="button"
                    id="button-addon2"
                  >
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
