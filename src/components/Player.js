import React from "react";
import StatTable from "./StatTable";
import YdAttGraph from './YdAttGraph';
import CmpGraph from './CmpGraph';

function Player() {
  
  return (
    <div className="player-wrapper">
      <StatTable />
      <div className="graph-wrapper">
        <YdAttGraph />
        <CmpGraph />
      </div>
    </div>
  )
}

export default Player;