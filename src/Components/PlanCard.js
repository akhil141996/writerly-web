import React from "react";

function PlanCard(props) {
  const { title, excerpt, imageurl, text, secondtext } = props;
  return (
    <div class="card shadow h-100" style={{ height: "100rem" }}>
      <img class="card-img-top" src={imageurl} />
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="text">{text}</p>
        <p class="card-text-text">{secondtext}</p>
        <p class="hl"></p>
        <p class="card-text">{excerpt}</p>
        <a href="/" class="stretched-link"></a>
      </div>
    </div>
  );
}

export default PlanCard;
