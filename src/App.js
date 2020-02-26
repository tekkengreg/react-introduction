import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayCard from "./DisplayCard";
import DisplaySelectedCard from "./DisplaySelectedCard";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(async () => {
    try {
      const response = await axios.get("https://api.pokemontcg.io/v1/cards");
      console.log(response);
      setCards(response.data.cards.slice(0,3));
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log("gg", selectedCard);

  return (
    <div className="App">
      <DisplaySelectedCard
        card={cards.length > 0 && selectedCard !== null && cards[selectedCard]}
      />
      <DisplayCard
        prout={cards}
        onSelectCard={setSelectedCard}
        selectedCard={selectedCard}
      />
    </div>
  );
}

export default App;
