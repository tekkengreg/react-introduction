import React, { useContext } from "react";
import { CardContext } from "../providers/CardProvider";

const DisplaySelectedCard = () => {
  const { cards, selectedCardIndex } = useContext(CardContext);

  if (selectedCardIndex === null) return <h1>pas card bell</h1>;

  return (
    <div>
      <h1>DisplaySelectedCard</h1>
      <img
        src={selectedCardIndex !== null && cards[selectedCardIndex].imageUrl}
      />
    </div>
  );
};

export default DisplaySelectedCard;
