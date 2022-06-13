import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlayersContext, PlayerContext, TokenContext} from './Context'
import DropdownMenu from './components/DropdownMenu';

function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [token, setToken] = useState();

  useEffect(() => {
    axios.get('https://project.trumedianetworks.com/api/token', {
      headers:
      {
        'apiKey': '3767d9f3-be40-4315-97e2-7d2f350d3b83', //CHANGE THIS TO ENV VARIABLE
      }
    })
    .then(res => {
      setToken(res.data.token)
    })
    .catch(err => {
      setToken(err)
    })
  }, []);

  return (
    <div className="App">
      <TokenContext.Provider value={{token}}>
        <PlayersContext.Provider value={{players, setPlayers}}>
          <PlayerContext.Provider value={{player, setPlayer}}>
            <DropdownMenu />
          </PlayerContext.Provider>
        </PlayersContext.Provider>
      </TokenContext.Provider>
    </div>
  );
}

export default App;