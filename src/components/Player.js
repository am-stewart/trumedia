import React from "react";
import StatTable from "./StatTable";
import StatGraph from './StatGraph'

function Player() {
  
  return (
    <div className="player-wrapper">
      <StatTable />
      <StatGraph />
    </div>
  )
}

export default Player;