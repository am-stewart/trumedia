import './App.css';
import React, { useState } from 'react';
import Players from './components/Players';
import { PlayersContext, PlayerContext} from './Context'

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);

  return (
    <div className="App">
      <PlayersContext.Provider value={{players, setPlayers}}>
        <PlayerContext.Provider value={{player, setPlayer}}>
          <Players />
        </PlayerContext.Provider>
      </PlayersContext.Provider>
    </div>
  );
}

export default App;
