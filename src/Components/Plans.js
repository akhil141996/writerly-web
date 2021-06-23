import React from "react";
import PlanCard from "./PlanCard";

function Plans() {
  const items = [
    {
      id: 1,
      title: "Free",
      text: "$ 0 / Month",
      secondtext: "-",
      excerpt: (
        <ul class="list-unstyled">
          <li>Add,edit,retrieve notes</li>
          <br />
          <li>Add unlimited notebooks</li>
          <li>Add upto 10tags</li>
          <li>Notes stored locally</li>
          <li>Access notes offline</li>
          <li>Cross platform access</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Premium",
      text: "$ 2.99 / Month ",
      secondtext: " Billed monthly",
      excerpt: (
        <ul class="list-unstyled">
          <li>Add,edit,retrieve notes</li>
          <li>
            Add <b>unlimited notebooks</b>
          </li>
          <li>
            Add <b>unlimited tags</b>
          </li>
          <li>
            <b>Password protect</b> your notes
          </li>
          <li>
            <b>Word tracker</b> progress bar
          </li>
          <li>
            <b>Export notes </b>
          </li>
          <li>Cloud Storage</li>
          <li>
            <b>Access notes offline </b>
          </li>
          <li>Cross-platform access</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Premium",
      text: "$ 4.99 / Month",
      secondtext: " Billed yearly",
      excerpt: (
        <ul class="list-unstyled">
          <li>Add,edit,retrieve notes</li>
          <li>
            Add <b>unlimited notebooks</b>
          </li>
          <li>
            Add <b>unlimited tags</b>
          </li>
          <li>
            <b>Password protect</b> your notes
          </li>
          <li>
            <b>Word tracker</b> progress bar
          </li>
          <li>
            <b>Export notes </b>
          </li>
          <li>Cloud Storage</li>
          <li>Access notes offline</li>
          <li>Cross-platform access</li>
        </ul>
      ),
    },
  ];
  return (
    <div class="container-fluid text-center my-3" style={{ width: "70rem" }}>
      <h1 class="font-weight-light">Pricing</h1>
      <div class="row my-3 pt-3">
        {items.map((item) => (
          <div key={item.id} class="col-12 col-md-4 my-2">
            <PlanCard
              title={item.title}
              excerpt={item.excerpt}
              text={item.text}
              secondtext={item.secondtext}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
