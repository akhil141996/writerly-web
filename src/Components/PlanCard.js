import React from "react";

function PlanCard(props) {
  const { title, excerpt, imageurl } = props;
  return (
    <div class="card shadow h-100">
      <img class="card-img-top" src={imageurl} />
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">{excerpt}</p>
        <a href="/" class="stretched-link"></a>
      </div>
    </div>
  );
}

export default PlanCard;
