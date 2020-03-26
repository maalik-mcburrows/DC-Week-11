import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';

function generateDeck() {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`]
  let deck = []

  for (let i = 0; i < 16; i++) {
    deck.push(
      {
        isFlipped: false,
        symbol: symbols[i%8]
      }
    )
  }

  shuffle(deck);
  return deck;
}


function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

class App extends Component {
  state = {
    deck: generateDeck(), 
    pickedCards: []
  }

  cardToFlip = {...this.state.deck[cardIndex], isFlipped: true};

  newPickedCards = this.state.pickedCards.concat(cardIndex);

  newDeck = this.state.deck.map(
    (card, index) => {
      if(cardIndex == index) {
        return this.cardToFlip;
      }
      return card;
    }
  );

  pickCard(cardIndex) {
    if(this.state.deck[cardIndex].isFlipped) {
      return this.pickCard(cardIndex)
    }
    this.setState({deck: newDeck, pickedCards: newPickedCards})
  }
  
  render(){

    const cardsJSX = this.state.deck.map(
      (card, index) => {
        return <MemoryCard key = {index} isFlipped = {card.isFlipped} symbol = {card.symbol} />
      }
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h2 className="App-subtitle">Match Cards to Win</h2>
        </header>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
