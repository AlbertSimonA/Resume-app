import React from "react";
import Copyright from "../Copyright/Copyright";
import Footer from "../Footer/Footer";
import "./Education.css";
import { Link } from "react-router-dom";

function Education() {
  return (
    <>
      <div className="container-edu">
        <div className="container-details">
          <div className="heading">
            <h2 className="h2">Educational Details</h2>
            <p className="para">Please fill carefully</p>
          </div>
        </div>
        <div className="form">
          <form action="">
            <ul>
              <li>
                <label htmlFor="">
                  Domain
                  <span className="form-required"></span>
                </label>
                <div className="form-input">
                  <input
                    type="text"
                    name="first-name"
                    placeholder=""
                    required
                  />
                </div>
              </li>
              <li>
                <label htmlFor="">
                  College Name
                  <span className="form-required"></span>
                </label>
                <div className="form-input">
                  <input type="text" name="last-name" placeholder="" required />
                </div>
              </li>
              <li>
                <label htmlFor="">
                  University Name
                  <span className="form-required"></span>
                </label>
                <div className="form-input">
                  <input type="text" name="e-mail" placeholder="" required />
                </div>
              </li>
              <li>
                <label htmlFor="">
                  Are you from Non-IT background
                  <span className="form-required"></span>
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
          <Link to="/details">
            <button type="back" class="btn btn-primary">
              Back
            </button>
          </Link>
          <Link to="/experience">
            <button type="back" class="btn btn-primary">
              Next
            </button>
          </Link>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default Education;
