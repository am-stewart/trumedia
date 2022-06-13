import StatTable from "./StatTable";
import YdAttGraph from './YdAttGraph';
import CmpGraph from './CmpGraph';
import ScoringGraph from "./ScoringGraph";

function Player() {

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