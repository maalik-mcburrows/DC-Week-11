import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';

function generateDeck() {
  const symbols = "`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`"
  deck = []

  for (let i = 0; i < 16; i++) {
    i = {
      isFlipped: false,
      symbol: [i%8]
    };
    deck = deck + i
  };
}

class App extends Component {
  state = {
    deck: [], 
    pickedCards: []
  }

  

  render(){
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
