import React, { useContext } from "react";
import StatTable from "./StatTable";
import YdAttGraph from './YdAttGraph';
import CmpGraph from './CmpGraph';
import ScoringGraph from "./ScoringGraph";
import { PlayerContext } from "../Context";

function Player() {
  const { player } = useContext(PlayerContext);

  return (
    <div className="player-wrapper">
      <StatTable />
      <div className="graph-wrapper">
        <YdAttGraph />
        <CmpGraph />
        <ScoringGraph />
      </div>
    </div>
  )
}

export default Player;