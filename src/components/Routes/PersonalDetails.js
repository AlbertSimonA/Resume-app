import React from "react";
import Copyright from "../Copyright/Copyright";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import "./PersonalDetails.css";

function PersonalDetails() {
  return (
    <>
      <div className="container-details">
        <div className="heading">
          <h2 className="h2">Personal Details</h2>
          <p className="para">Please fill carefully</p>
        </div>
      </div>
      <div className="form">
        <form action="">
          <ul>
            <li>
              <label htmlFor="">
                First Name
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
                Last Name
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
                Email-Id
                <span className="form-required"></span>
              </label>
              <div className="form-input">
                <input type="text" name="e-mail" placeholder="" required="" />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Phone Number
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
        <Link to="/">
          <button type="back" class="btn btn-primary">
            Back
          </button>
        </Link>

        <Link to="/education">
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

export default PersonalDetails;
