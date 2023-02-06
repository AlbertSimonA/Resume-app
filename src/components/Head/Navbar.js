import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="nav-ul">
            <li className="lin">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/details">Personal Details</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
          </ul>
          <div className="button-one">
            <Link to="/signup">
              <button type="button" class="btn btn-primary">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
