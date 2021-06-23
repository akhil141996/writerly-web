import React from "react";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";

function Footer2() {
  return (
    <div class="container-fluid " style={{ backgroundColor: "goldenrod" }}>
      <div class="row justify-content-space-between  align-items-center">
        <div class="col-6 py-3" style={{ textAlign: "left" }}>
          Terms and Privacy Policy
        </div>
        <div class="col-6 py-3" style={{ textAlign: "right" }}>
          <img src={image2}></img>
          <img src={image3}></img>
        </div>
      </div>
    </div>
  );
}
export default Footer2;
