import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <h2>Connect with us on social media</h2>
      </div>

      <div className="footer-box">
        <h3>JOB SEEKERS</h3>
        <li>
          <a href="#">Create a Resume</a>
        </li>
        <li>
          <a href="#">Resume Examples</a>
        </li>
        <li>
          <a href="#">Job Search</a>
        </li>
      </div>

      <div className="footer-box">
        <h3>CAREER RESOURCES</h3>
        <li>
          <a href="#">Resume Help</a>
        </li>
        <li>
          <a href="#">Job Interview</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
      </div>

      <div className="footer-box">
        <h3>SUPPORT</h3>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
      </div>
    </div>
  );
}

export default Footer;
