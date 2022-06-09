import './App.css';
import React, { useState } from 'react';
import { PlayersContext, PlayerContext} from './Context'
import DropdownMenu from './components/DropdownMenu';

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);

  return (
    <div className="App">
      <PlayersContext.Provider value={{players, setPlayers}}>
        <PlayerContext.Provider value={{player, setPlayer}}>
          <DropdownMenu />
        </PlayerContext.Provider>
      </PlayersContext.Provider>
    </div>
  );
}

export default App;