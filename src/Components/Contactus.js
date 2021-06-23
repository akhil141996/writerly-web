import React from "react";
import Description from "./Description";
import Features from "./Features";
import Plans from "./Plans";

function Contactus() {
  return (
    <div class="container-fluid">
      <Description />
      <Features />
      <Plans />

      <div class="row">
        <div class="col-md-12 py-5 text-center">
          <h1>
            <p class="text-center">Contact us</p>
          </h1>
          <form>
            <input
              type="text"
              style={{ width: "700px", height: "50px" }}
              placeholder="Name"
            ></input>
            <br />
            <br />
            <input
              type="email"
              style={{ width: "700px", height: "50px" }}
              placeholder="Email"
            ></input>
            <br />
            <br />
            <textarea
              type="text"
              style={{ width: "700px", height: "200px" }}
              placeholder="Message"
            ></textarea>
          </form>
        </div>
        <div class="col-12 text-center ">
          <button class=" btn btn-warning mb-5" style={{ width: "250px" }}>
            Submit
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Contactus;
