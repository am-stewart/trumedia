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
        'apiKey': process.env.REACT_APP_API_KEY,
      }
    })
    .then(res => {
      setToken(res.data.token)
    })
    .catch(err => {
      setToken(err)
    })
  }, []);

  useEffect(() => {
    axios.get('https://project.trumedianetworks.com/api/nfl/players', {
      headers:
      {
        'tempToken': `${token}`,
      }
    })
    .then(res => {
      setPlayers([...res.data])
    })
    .catch(err => {
      console.log(err);
    })
  }, [token])

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