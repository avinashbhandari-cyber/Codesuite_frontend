import React from "react";
import {Link } from "react-router-dom";

export default function Homemid() {

  return (
    <>
      <div className="Home-top">
        <div className="top-mid">
          <div id="quote">
            <strong id="midhead"> Grow Knowledge Effortlessly </strong> <br />
            <p id="para"> Learn to Code has never been difficult </p>
          </div>
          <div id="midimg"> </div>
        </div>
      </div>
      <br />
      <br />
      <h1
        style={{ textAlign: "center", color: "white", fontFamily: "cursive" }}
      >
        {" "}
        What You Will Get{" "}
      </h1>
      <br />
      <br />
      <div className="mid-boxes">
        <div id="box1" className="boxes">
          <div className="inner-img" id="img1">
          </div>
          <div className="content">
            <Link to="/courses"> Learn and practice </Link> 
          </div>
        </div>

        <div id="box2" className="boxes">
          <div className="inner-img" id="img2"> 
            {" "}
          </div>
          <div className="content" id="comp">
          <Link to="/compiler"> Compile Your Code </Link> 
          </div>
        </div>

        <div id="box3" className="boxes">
          <div className="inner-img" id="img3">
            {" "}
          </div>
          <div className="content">
          <Link to="/ContestPortal"> Participate in Contest </Link> 
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      <h1
        style={{ textAlign: "center", color: "white", fontFamily: "cursive" }}
      >
        {" "}
        This is just the beginning....{" "}
      </h1>
      <br />
      <br />
      <div className="mailbox">
        <form style={{ color: "white" }}>
          <label>
            Signup for our newsletter: <br />
            <input type="email" name="gmail" placeholder="Enter your email" />
          </label>{" "}
          <br />
          <input type="submit" id="sub-btn" value="Submit" />
        </form>
        <div id="mailboximg"> </div>
      </div>
    </>
  );
}
