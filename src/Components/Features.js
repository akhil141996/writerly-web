import React from "react";

import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";
import feature4 from "../assets/feature4.jpg";
import Feature5 from "../assets/Feature5.jpg";
import feature6 from "../assets/feature6.jpg";
import feature7 from "../assets/feature7.jpg";
import feature8 from "../assets/feature8.jpg";

function Features() {
  return (
    <div class=" w-100">
      <div class="container text-center py-5 ml-5 mr-5">
        <h1 class="font-weight-light">Features</h1>
        <div class="d-flex flex-row justify-content-between my-flex-container">
          <div class="p-2 my-flex-item">
            <img src={feature1}></img>
            <h5 class="py-2">Notes</h5>
            <h6
              style={{
                width: "202px",
                height: "101px",
                left: "399px",
                top: "863px",
              }}
            >
              Add, edit, and retrieve notes by adding your thoughts and ideas
              using the text editor.
            </h6>
          </div>
          <div class="p-2 my-flex-item">
            <img src={feature2}></img>
            <h5 class="py-2">NoteBooks</h5>
            <h6
              style={{
                width: "202px",
                height: "101px",
                left: "399px",
                top: "863px",
              }}
            >
              Create notebooks to store notes of different categories making it
              easy to segregate content.
            </h6>
          </div>
          <div class="p-2 my-flex-item">
            <img src={feature3}></img>
            <h5 class="py-2">Tags</h5>
            <h6
              style={{
                width: "202px",
                height: "101px",
                left: "399px",
                top: "863px",
              }}
            >
              Add tags to classify information making it easy to search and
              retrieve notes.
            </h6>
          </div>
          <div class="p-2 my-flex-item">
            <img src={feature4}></img>
            <h5 class="py-2">Protect</h5>
            <h6
              style={{
                width: "202px",
                height: "101px",
                left: "399px",
                top: "863px",
              }}
            >
              Set password for an individual note and store your personal
              information and passwords.
            </h6>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between my-flex-container">
          <div class="p-2 my-flex-item">
            <img src={Feature5}></img>
            <h5 class="py-2">Word Tracker</h5>
            <h6
              style={{
                width: "202px",
                height: "101px",
                left: "399px",
                top: "863px",
              }}
            >
              Add, edit, and retrieve notes by adding your thoughts and ideas
              using the text editor.
            </h6>
          </div>
          <div class="p-2 my-flex-item">
            <img src={feature6}></img>
            <h5 class="py-2">Export Notes</h5>
            <h6
              style={{
                width: "202px",
                height: "101px",
                left: "399px",
                top: "863px",
              }}
            >
              Create notebooks to store notes of different categories making it
              easy to segregate content.
            </h6>
          </div>
          <div class="p-2 my-flex-item">
            <img src={feature7}></img>
            <h5 class="py-2">Cloud Integration</h5>
            <h6
              style={{
                width: "202px",
                height: "101px",
                left: "399px",
                top: "863px",
              }}
            >
              Add tags to classify information making it easy to search and
              retrieve notes.
            </h6>
          </div>
          <div class="p-2 my-flex-item">
            <img src={feature8}></img>
            <h5 class="py-2">More Features</h5>
            <h6
              style={{
                width: "202px",
                height: "101px",
                left: "399px",
                top: "863px",
              }}
            >
              Stay tuned for more amazing features to give you a pleasant note
              taking experience in our upcoming versions.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
