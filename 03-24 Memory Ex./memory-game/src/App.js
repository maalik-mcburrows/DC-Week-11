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

  render(){

    const cardsJSX = this.state.deck.map(
      (card, index) => {
        return <MemoryCard />
      }
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h2 className="App-subtitle">Match Cards to Win</h2>
        </header>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    );
  }
}

export default App;
