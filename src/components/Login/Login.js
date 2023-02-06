import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container-login">
        <div className="main-login">
          <div className="login-left">
            <h3 className="login-h3">
              Try our professional <br />
              Resume builder now!
            </h3>
            <p className="log-para">
              Features designed to helpyou win your dream job
            </p>
          </div>
          <div className="container-logtwo">
            <div className="right-login">
              <form action="">
                <ul className="form-ul">
                  <li>
                    <label htmlFor="">
                      <span className="form-required"></span>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="first-name"
                        placeholder="Email or Phone Number"
                        required
                      />
                    </div>
                  </li>
                  <li>
                    <label htmlFor="">
                      <span className="form-required"></span>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="first-name"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <br />
                    <Link to="/">
                      <button type="log-In" class="btn btn-primary">
                        Log In
                      </button>
                    </Link>
                    <br />
                    <br />
                    <p>Forgot Password ?</p>
                    <button type="new" class="btn btn-success">
                      Create New Account
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="main-last">
        <h1 className="last-h">Join over 23,163,000 users worldwide</h1>
        <p className="last-p">Start for free — try our resume builder now</p>
      </div>
    </>
  );
}

export default Login;
