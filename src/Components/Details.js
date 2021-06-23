import React from "react";
import laptop from "../assets/laptop.png";
import Description from "./Description";
import Features from "./Features";
import Contactus from "./Contactus";
import Plans from "./Plans";
function Details() {
  return (
    <div class="container-fluid">
      <div class="row py-4">
        <div class="col-6">
          <img class="img-fluid wd-75" src={laptop}></img>
        </div>
        <div class="col-6 py-3 text-justify">
          <h5>
            <b>WORK ANYWHERE</b>
          </h5>
          <h6 class="py-2" style={{ color: "grey" }}>
            Keep important info handy by syncing your notes to all your devices.
          </h6>
          <h5 class="py-2">
            <b>CAPTURE WHAT MATTERS</b>
          </h5>
          <h6 class="py-2" style={{ color: "grey" }}>
            Add text, images, audio, scans, PDFs, and documents to your notes.
          </h6>
          <h5 class="py-2">
            <b>YOUR NOTES, YOUR WAY</b>
          </h5>
          <h6 class="py-2" style={{ color: "grey" }}>
            Express yourself with formatting tools that help you write how you
            think.
          </h6>
          <h5 class="py-2">
            <b>FIND THINGS FAST </b>
          </h5>
          <h6 class="py-2" style={{ color: "grey" }}>
            Get what you need, when you need it. Search gives you results as you
            type
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Details;
