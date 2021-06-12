import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div class="container-fluid text-center">
      <div class="row py-4">
        <div class="col-12">
          <h1>Accomplish more with better notes</h1>
        </div>
      </div>
      <div class="row py-1">
        <div class="col-12">
          <h6 style={{ color: "grey" }}>
            Writer.ly helps you capture ideas and find them fast.
          </h6>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12">
          <Link to="/Signupdetails">
            <button class=" btn btn-warning">Sign up for free</button>
          </Link>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12">
          <a href="/" style={{ color: "black" }}>
            Already have an account? Log in{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
