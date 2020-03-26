import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
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
