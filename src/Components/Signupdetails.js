import React from "react";
import logo from "../assets/logo.png";

function Signupdetails() {
  return (
    <div class="container-fluid" style={{}}>
      <div class="row">
        <div class="col-md-12 py-5 text-center">
          <img class="mx-auto d-block " width="70" height="70" src={logo}></img>
          <h2>
            <p class="text-center">Sign up</p>
          </h2>
          <form>
            <input
              type="email"
              style={{ width: "600px", height: "50px" }}
              placeholder="Email Address*"
            ></input>
            <br />
            <br />
            <input
              type="password"
              style={{ width: "600px", height: "50px" }}
              placeholder="Password*"
            ></input>
            <br />
            <br />
            <input
              type="password"
              style={{ width: "600px", height: "50px" }}
              placeholder=" Retype Password*"
            ></input>
            <div class="col-8">
              <input type="checkbox"></input>

              <b>Remember me</b>
            </div>
          </form>
        </div>
        <div class="col-12 text-center">
          <button class=" btn btn-warning">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Signupdetails;
