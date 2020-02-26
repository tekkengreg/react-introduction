import React, { useContext } from "react";
import { CardContext } from "../providers/CardProvider";

const styles = {
  image: {
    border: "30px solid green"
  }
};

const DisplayCard = props => {
  const cardCtxt = useContext(CardContext);

  return (
    <div>
      <h1>DisplayCard</h1>
      {cardCtxt.cards.map((card, i) => (
        <img
          key={`card-${i}`}
          src={card.imageUrl}
          alt=""
          className="image"
          onClick={() => cardCtxt.prout(i)}
          style={{
            ...styles.image,
            borderColor: i === cardCtxt.selectedCardIndex ? "red" : "green"
          }}
        />
      ))}
    </div>
  );
};

export default DisplayCard;
