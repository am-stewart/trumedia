import './App.css';
import React, { useState } from 'react';
import Players from './components/Players';

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);

  return (
    <div className="App">
      <h1> Hello </h1>
      <Players />
    </div>
  );
}

export default App;
