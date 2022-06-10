import React from "react";
import StatTable from "./StatTable";
import StatGraph from './StatGraph'

function Player(props) {
  
  return (
    <div className="player-wrapper">
      <StatTable />
      <StatGraph />
    </div>
  )
}

export default Player;