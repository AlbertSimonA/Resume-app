import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <>
      <div className="container-resume">
        <div className="resume-img">
          <img src="" alt="" />
        </div>
        <div className="resume-datas">
          <ul>
            <li>First Name :</li>
            <li>Last Name :</li>
            <li>Email-Id :</li>
            <li>Phone Number:</li>
            <li>Domain :</li>
            <li>College Name:</li>
            <li>University Name :</li>
            <li>Are you from Non-IT background :</li>
            <li>Experience with frontend technologies:</li>
            <li>Any achievements with this technology:</li>
          </ul>
          <div className="resume-datas-two">
            <ul>
              <li>Project 1:</li>
              <li>Project 2:</li>
              <li>Project 3:</li>
              <li>Project 4:</li>
              <li>Frontend skills:</li>
              <li>Backend skills:</li>
              <li>Other hobbies:</li>
              <li>Github link:</li>
              <li>Summary:</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
