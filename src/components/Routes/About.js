import React from "react";
import Copyright from "../Copyright/Copyright";
import Footer from "../Footer/Footer";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container-details">
        <div className="heading">
          <h2 className="h2">Tell about your skills</h2>
          <p className="para">Please fill carefully</p>
        </div>
      </div>
      <div className="form">
        <form action="">
          <ul>
            <li>
              <label htmlFor="">
                FrontEnd Technologies
                <span className="form-required"></span>
              </label>
              <div className="form-input">
                <input
                  type="text"
                  name="first-name"
                  placeholder=""
                  required=""
                />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Backend Technologies
                <span className="form-required"></span>
              </label>
              <div className="form-input">
                <input
                  type="text"
                  name="last-name"
                  placeholder=""
                  required=""
                />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Other Hobbies
                <span className="form-required"></span>
              </label>
              <div className="form-input">
                <input type="text" name="e-mail" placeholder="" required="" />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Github Link
                <span className="form-required"></span>
              </label>
              <div className="form-input">
                <input
                  type="text"
                  name="phone-number"
                  placeholder=""
                  required=""
                />
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div className="button-back">
        <Link to="/projects">
          <button type="back" class="btn btn-primary">
            Back
          </button>
        </Link>
        <Link to="/summary">
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

export default About;
