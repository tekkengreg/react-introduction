import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import DisplayCard from "./components/DisplayCard";
import DisplaySelectedCard from "./components/DisplaySelectedCard";
import axios from "axios";

export const CardContext = createContext();

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [count, setCount] = useState(0);

  const getCards = async () => {
    try {
      const response = await axios.get("https://api.pokemontcg.io/v1/cards");
      console.log(response);
      setCards(response.data.cards.slice(0, 3));
    } catch (e) {
      console.log(e);
    }
  };

  setTimeout(() => setCount(count + 1), 1000);
  useEffect(() => {
    // getCards();
  }, []);

  console.log("gg", selectedCard);

  return (
    <div className="App">
      <CardContext.Provider value={count}>
        <CardContext.Consumer>
          {value => (
            <DisplaySelectedCard
              card={
                cards.length > 0 && selectedCard !== null && cards[selectedCard]
              }
              contextValueExample={value}
            />
          )}
        </CardContext.Consumer>
        <DisplayCard
          prout={cards}
          onSelectCard={setSelectedCard}
          selectedCard={selectedCard}
        />
      </CardContext.Provider>
    </div>
  );
}

export default App;
