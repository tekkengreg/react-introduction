import React, { Component, createContext } from "react";
import axios from "axios";
export const CardContext = createContext();

class CardProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      selectedCardIndex: null,
      prout: this.selectCard
    };
  }
  componentDidMount() {
    this.getCards();
  }

  getCards = async () => {
    try {
      const response = await axios.get("https://api.pokemontcg.io/v1/cards");
      console.log(response);
      this.setState({ cards: response.data.cards.slice(0, 3) });
    } catch (e) {
      console.log(e);
    }
  };

  selectCard = index =>
    this.setState({ selectedCardIndex: index });

  render() {
    return (
      <CardContext.Provider value={this.state}>
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default CardProvider;
