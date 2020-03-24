import React from 'react';
import MemoryCard from "./components/MemoryCard)"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h2 className="App-subtitle">Match Cards to Win</h2>
      </header>
      <MemoryCard />
    </div>
  );
}

export default App;
