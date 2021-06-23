import React from "react";
import PlanCard from "./PlanCard";

function Plans() {
  const items = [
    {
      id: 1,
      title: "Free",
      text: "$ 0 / Month",
      secondtext: "-",
      excerpt:
        "Add,edit,retrieve notes Add unlimited notebooks,Add upto 10 tags,Notes stored locally,Access notes offline,Cross platform access  ",
    },
    {
      id: 2,
      title: "Premium",
      text: "$ 2.99 / Month ",
      secondtext: " Billed monthly",
      excerpt: "PRO ₹199 per month, billed anually or ₹399 billed monthly",
    },
    {
      id: 3,
      title: "Premium",
      text: "$ 4.99 / Month",
      secondtext: " Billed monthly",
      excerpt: "PRO ₹199 per month, billed anually or ₹399 billed monthly",
    },
  ];
  return (
    <div class="container-fluid text-center my-3" style={{ width: "55rem" }}>
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
