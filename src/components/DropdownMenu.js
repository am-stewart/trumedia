import React, { useContext, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Select } from 'antd';
import Player from './Player';
import { PlayersContext, PlayerContext, TokenContext } from '../Context';

const DropdownMenu = () => {
  const { players, setPlayers } = useContext(PlayersContext);
  const { setPlayer } = useContext(PlayerContext);
  const [toggleOn, setToggleOn] = useState(false);
  const { token } = useContext(TokenContext);
  console.log(token)

  // useEffect(() => {
  //   axios.get('https://project.trumedianetworks.com/api/nfl/players', {
  //     headers:
  //     {
  //       'tempToken': `${token}`,
  //     }
  //   })
  //   .then(res => {
  //     setPlayers([...res.data])
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, [])

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
        'tempToken': `${token}`,
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
    <div className='dropdown-wrapper'>
      <h1> 2018 NFL Quarterbacks </h1>
        <Select placeholder='Choose player'
        allowClear 
        style={{width: '20%'}}
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