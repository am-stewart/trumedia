import React, { useContext, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Select } from 'antd';
import Player from './Player';
import { PlayersContext, PlayerContext } from '../Context';



const DropdownMenu = () => {
  const { players, setPlayers } = useContext(PlayersContext);
  const { setPlayer } = useContext(PlayerContext);
  const [toggleOn, setToggleOn] = useState(false);

  useEffect(() => {
    axios.get('https://project.trumedianetworks.com/api/nfl/players', {
      headers:
      {
        "tempToken": "1d982543-8084-47ef-bb55-2c3e84cf1668",
        "expires": "Thu, 09 Jun 2022 21:17:35 GMT"
      }
    })
    .then(res => {
      setPlayers([...res.data])
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const handleSelect = (key) => {
    fetchPlayer(key)
    setToggleOn(true)
  }

  const handleClear = (value) => {
    setToggleOn(false)
  }

  const fetchPlayer= (id) => {
    axios.get(`https://project.trumedianetworks.com/api/nfl/player/${id}`, {
      headers:
      {
        "tempToken": "1d982543-8084-47ef-bb55-2c3e84cf1668",
        "expires": "Thu, 09 Jun 2022 21:17:35 GMT"
      }
    })
    .then(res => {
      setPlayer([...res.data])
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  return (
    <div>
      <h1> 2018 NFL Quarterbacks </h1>
        <Select placeholder='Choose player'
        allowClear 
        style={{width: '30%'}}
        onSelect={handleSelect}
        onClear={handleClear}>
          {players.map((player) => {
             return <Select.Option 
             key={player.playerId} 
             value={player.playerId}>
               {player.fullName}
             </Select.Option>
          })}
        </Select>
        {toggleOn && <Player />}
    </div>
  );
};

export default DropdownMenu;