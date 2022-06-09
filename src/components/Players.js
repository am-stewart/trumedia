// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { PlayerContext, PlayersContext } from "../Context";
// import Player from "./Player";

// function Players(props) {
//   const { players, setPlayers } = useContext(PlayersContext);
//   const { setPlayer } = useContext(PlayerContext);
//   const [toggleOn, setToggleOn] = useState(false);

//   const fetchPlayer= (id) => {
//     axios.get(`https://project.trumedianetworks.com/api/nfl/player/${id}`, {
//       headers:
//       {
//         "tempToken": "1d982543-8084-47ef-bb55-2c3e84cf1668",
//         "expires": "Thu, 09 Jun 2022 21:17:35 GMT"
//       }
//     })
//     .then(res => {
//       setPlayer([...res.data])
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

//   return (
//     <div>
//       <h1>2018 NFL Quarterbacks</h1>
//       {players.map(player => (
//         <div className='player-card' key={player.playerId}>
//           <img className='player-photo item' src={player.playerImage} alt={player.fullName}/>
//           <h2 className='item'>{player.fullName}</h2>
//           <button onClick={() => {
//             fetchPlayer(player.playerId)
//             setToggleOn(true)
//             }}>
//               Show Stats</button>
//         </div>
//       ))}
//       {toggleOn && <Player />}
//     </div>
//   )
// }

// export default Players;