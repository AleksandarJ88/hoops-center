import React from "react";

/*
Used to display single player's stats. Receives data from ShowPlayer component via props and displays it to UI.
*/

const PlayerItem = (props) => (
  <div>
    {props.player.id &&
      <div className="player">
        <div className="player__info">
          <p>{props.player.firstName} {props.player.lastName}</p>
          <p>{props.player.team}</p>
          <p>Season 2018/2019</p>
        </div>
        <p>Games played: {props.player.gamesPlayed}</p>
        <p className="player__stats">points per game: {props.player.avgPts}</p>
        <p className="player__stats">assists per game: {props.player.avgAst}</p>
        <p className="player__stats">rebounds per game: {props.player.avgReb}</p>
      </div>}
  </div>
);

export default PlayerItem;