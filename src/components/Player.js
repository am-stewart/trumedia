import React, { useContext } from "react";
import { PlayersContext, PlayerContext } from '../Context'

function Player(props) {
  const { player } = useContext(PlayerContext);
  
  return (
    <div>
      Individual player stats go here
      
    </div>
  )
}

export default Player;