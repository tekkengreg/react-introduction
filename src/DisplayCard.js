import React from "react";
import { Card } from "reactstrap";

const styles = {
  image: {
    border: "3px solid green"
  }
};

const DisplayCard = props => {
  const { prout, onSelectCard, selectedCard } = props;
  //   const prout = props.prout;

  const generateCards = () => {
    const output = [];
    for (let i = 0; i < prout.length; i++) output.push(<img src={prout[i].imageUrl} />);
    return output;
  };
  
  return (
    <div>
      <h1>DisplayCard</h1>
      {generateCards()}
      {prout.map((card, i) => (
        <img
          key={`card-${i}`}
          src={card.imageUrl}
          alt=""
          className="image"
          onClick={() => onSelectCard(i)}
          style={{
            ...styles.image,
            borderColor: i === selectedCard ? "red" : "green"
          }}
        />
      ))}
    </div>
  );
};

export default DisplayCard;
