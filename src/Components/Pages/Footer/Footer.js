import React from "react";
import "./Footer.css"; // Import the custom CSS file for the footer

const Footer = () => {
  return (
    <footer className="footer text-light">
      <div className="container d-flex flex-column">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              suscipit, enim et fermentum venenatis, leo elit sollicitudin enim,
              non efficitur dolor nulla vitae mauris.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <span className="fa fa-map-marker me-2"></span>123 Street, City,
                Country
              </li>
              <li>
                <span className="fa fa-phone me-2"></span>+1234567890
              </li>
              <li>
                <span className="fa fa-envelope me-2"></span>
                info@example.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-auto text-center">
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
