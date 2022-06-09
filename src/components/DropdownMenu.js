import React, { useContext, useState } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
// import Player from './Player';
import { PlayersContext } from '../Context';

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

const DropdownMenu = () => {
  const { players } = useContext(PlayersContext);

  return (
    <div>
      <header>
        <Select placeholder='Choose player(s) ▼' 
        mode={'multiple'} 
        allowClear 
        style={{width: '30%'}}
        onChange={handleChange}>
          {players.map((player) => {
             return <Select.Option key={player.playerId} value={player.fullName}></Select.Option>
          })}
        </Select>
      </header>
    </div>
  );
};

export default DropdownMenu;