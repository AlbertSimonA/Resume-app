import React from "react";
import Copyright from "../Copyright/Copyright";
import Footer from "../Footer/Footer";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="container-details">
        <div className="heading">
          <h2 className="h2">Projects</h2>
          <p className="para">Please fill carefully</p>
        </div>
      </div>
      <div className="form">
        <form action="">
          <ul>
            <li>
              <label htmlFor="">
                Project 1<span className="form-required"></span>
              </label>
              <div className="form-input">
                <input type="text" name="first-name" placeholder="" required />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Project 2<span className="form-required"></span>
              </label>
              <div className="form-input">
                <input type="text" name="last-name" placeholder="" required />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Project 3<span className="form-required"></span>
              </label>
              <div className="form-input">
                <input type="text" name="e-mail" placeholder="" required />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Project 4<span className="form-required"></span>
              </label>
              <div className="form-input">
                <input
                  type="text"
                  name="phone-number"
                  placeholder=""
                  required
                />
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div className="button-back">
        <Link to="/experience">
          <button type="back" class="btn btn-primary">
            Back
          </button>
        </Link>
        <Link to="/about">
          <button type="back" class="btn btn-primary">
            Next
          </button>
        </Link>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default Projects;
