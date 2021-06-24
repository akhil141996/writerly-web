import React from "react";
import image from "../assets/image.png";

function Description() {
  return (
    <div class="container-fluid  text-left py-3 mx-4 text-justify">
      <div class="row">
        <div class="col-6">
          <h1>A Note-taking app that acts as your digital second brain!</h1>
          <h6 class="py-2">
            Writer.ly has been designed for efficient note-taking, storing,
            protecting and retrieving information from your notebooks. You can
            write, store, and edit notes.
          </h6>
          <button class="btn btn-warning ml-auto">Try for free</button>
        </div>

        <div class="col-6 ">
          <img
            src={image}
            class="img-fluid mx-5"
            style={{ float: "right", blockSize: "250px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Description;
