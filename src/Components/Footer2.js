import React from "react";
import image2 from "../assets/image 2.png";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer2() {
  return (
    <div class="container-fluid " style={{ backgroundColor: "goldenrod" }}>
      <div class="row justify-content-space-between  align-items-center">
        <div class="col-3 py-3">
          <h2>
            <b>Writer.ly</b>
          </h2>
          locate in:
          <br />
          Hyderabad City, Telangana State, India
        </div>
        <div class="col-3 py-3" style={{ textAlign: "left" }}>
          <b>Terms and Privacy </b>
        </div>
        <div class="col-3 py-3">
          <FaEnvelope class="me-3" style={{ fontSize: "30px" }} />
          <FaInstagram class="me-3" style={{ fontSize: "30px" }} />
          <FaTwitter class="me-3" style={{ fontSize: "30px" }} />
          <FaFacebook class="me-3" style={{ fontSize: "30px" }} />
          <FaReddit class="me-3" style={{ fontSize: "30px" }} />
          <FaLinkedin class="me-3" style={{ fontSize: "30px" }} />
          <FaYoutube class="me-3" style={{ fontSize: "30px" }} />
        </div>
        <div class="col-3 py-3" style={{ textAlign: "right" }}>
          <img src={image2}></img>
        </div>
      </div>
    </div>
  );
}
export default Footer2;
