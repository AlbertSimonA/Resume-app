import React from "react";
import Copyright from "../Copyright/Copyright";
import Footer from "../Footer/Footer";
import "./Summary.css";
import { Link } from "react-router-dom";

function Summary() {
  return (
    <>
      <div className="container-details">
        <div className="heading">
          <h2 className="h2">Summary</h2>
          <p className="para">Please fill carefully</p>
        </div>
      </div>
      <div className="form">
        <form action="">
          <textarea
            className="message"
            name="message"
            placeholder=""
          ></textarea>
        </form>
      </div>
      <div className="button-back">
        <Link to="/about">
          <button type="back" class="btn btn-primary">
            Back
          </button>
        </Link>
        <Link to="/resume">
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

export default Summary;
