import React from "react";
import logo from "../assets/logo.png";

function Signin() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 py-5 text-center">
          <img class="mx-auto d-block " width="70" height="70" src={logo}></img>
          <h2>
            <p class="text-center">Sign in</p>
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

            <div class="col-8">
              <input type="checkbox"></input>

              <b>Remember me</b>
            </div>
          </form>
        </div>
        <div class="col-12 text-center">
          <button class=" btn btn-warning" style={{ width: "415px" }}>
            Sign up for free
          </button>
          <br />
          <a href="/">Forgot Password?</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/">Don't have an account? Sign up</a>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Signin;
