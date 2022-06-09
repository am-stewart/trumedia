import React, { useContext } from "react";
import { PlayersContext, PlayerContext } from '../Context'

function Player(props) {
  const { player } = useContext(PlayerContext);
  
  return (
    <div>
      <div className='player-wrapper'>
      <h2>Player Stats</h2>
        <h1>{player.fullName}</h1>
        <img src={player.image} alt={player.fullName}/>
      {player.map(stat => (
        <div className='stat-wrapper' key={stat.week}>
          <span className='opponent-wrapper'>
        <img src={stat.teamImage} alt={stat.team}/>
        <p>vs.</p>
        <img src={stat.opponentImage} alt={stat.opponent}/>
        </span>
          <p>Week {stat.week}</p>
          <p>{stat.gameDate}</p>
          <p>{stat.opponent}</p>
          <p>PsYds/Att: {Math.round(stat.PsYds / stat.Att)}</p>
          <p>Comp%: {Math.round((stat.Cmp / stat.Att) * 100)}%</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Player;