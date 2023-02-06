import React from "react";
import Copyright from "../Copyright/Copyright";
import Footer from "../Footer/Footer";
import "./Experience.css";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <>
      <div className="container-details">
        <div className="heading">
          <h2 className="h2">Achievements / Experiences</h2>
          <p className="para">Please fill carefully</p>
        </div>
      </div>
      <div className="form">
        <form action="">
          <ul>
            <li>
              <label htmlFor="">
                Experience with frontend
                <span className="form-required"></span>
              </label>
              <div className="form-input">
                <input type="text" name="first-name" placeholder="" required />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Experience with backend
                <span className="form-required"></span>
              </label>
              <div className="form-input">
                <input type="text" name="last-name" placeholder="" required />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Any achievements with this technologies
                <span className="form-required"></span>
              </label>
              <div className="form-input">
                <input type="text" name="e-mail" placeholder="" required />
              </div>
            </li>
            <li>
              <label htmlFor="">
                Any future plans
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
        <Link to="/education">
          <button type="back" class="btn btn-primary">
            Back
          </button>
        </Link>
        <Link to="/projects">
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

export default Experience;
