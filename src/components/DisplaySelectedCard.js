import React from "react";

const DisplaySelectedCard = ({ card, contextValueExample }) => {
  console.log("gg 3", contextValueExample);

  if (!card) return <h1>pas card bell</h1>;

  return (
    <div>
      <h1>DisplaySelectedCard</h1>
      <img src={card && card.imageUrl} />
    </div>
  );
};

export default DisplaySelectedCard;
