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


  pickCard(cardIndex) {
    if(this.state.deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = {...this.state.deck[cardIndex]};
    cardToFlip.isFlipped = true;


    let newDeck = this.state.deck.map(
      (card, index) => {
        if(cardIndex === index) {
          return cardToFlip;
        }
        return card;
      }
    );
    
    let newPickedCards = this.state.pickedCards.concat(cardIndex);

      if(newPickedCards.length === 2) {
        const card1Index = newPickedCards[0];
        const card2Index = newPickedCards[1];
        if(newDeck[card1Index].symbol === newDeck[card2Index].symbol) {
          setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000)
        }
        newPickedCards = [];
      }

    this.setState({deck: newDeck, pickedCards: newPickedCards})
  }

  unflipCards(card1Index, card2Index) {
    let card1 = {...this.state.deck[card1Index]};
    let card2 = {...this.state.deck[card2Index]};
    card1.isFlipped = false;
    card2.isFlipped = false;
    // this next part comes from step 7 part 6 ask for someone to explain logic
    let newDeck = this.state.deck.map((card, index) => {
      if(card1Index === index || card2Index === index) {
        card.isFlipped = false;
        return card;
      }
      return card;
    });
    this.setState({deck: newDeck});
  }
  
  render(){

    const cardsJSX = this.state.deck.map(
      (card, index) => {
        return <MemoryCard key = {index} isFlipped = {card.isFlipped} symbol = {card.symbol} pickCard = {this.pickCard.bind(this, index)} />
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
