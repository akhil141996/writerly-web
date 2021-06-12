import React from "react";
import PlanCard from "./PlanCard";

function Plans() {
  const items = [
    {
      id: 1,
      title: "Writer.ly Basic",
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvJmFfqX2yQuZ_nGcYuACsBWCCgMjnsU4fw&usqp=CAU",
      excerpt: "Take great notes and find what you need fast",
    },
    {
      id: 2,
      title: "Writer.ly Premium",
      imageurl:
        "https://logosbynick.com/wp-content/uploads/2017/11/illustrator-tutorial-step1.png",
      excerpt: "PRO ₹199 per month, billed anually or ₹399 billed monthly",
    },
  ];
  return (
    <div class="container-fluid text-center my-3" style={{ width: "40rem" }}>
      <div class="row my-3 pt-3">
        {items.map((item) => (
          <div key={item.id} class="col-6 col-md-6 my-2">
            <PlanCard
              title={item.title}
              excerpt={item.excerpt}
              imageurl={item.imageurl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
