import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="container">
      <div className="container-two">
        <div className="main">
          <h1 className="text">Build a professional</h1>
          <h1>resume for free</h1> <br />
          <p className="para">
            create your resume easily with our free builder and
          </p>
          <p className="para">professional templates</p>
        </div>
        <br />
        <div className="buttons">
          <Link to="/details">
            <button type="button" class="btn btn-primary">
              Create New Resume
            </button>
          </Link>
        </div>
      </div>

      <div className="img">
        <img
          src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Body;
