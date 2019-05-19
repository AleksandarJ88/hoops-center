import React from "react";
import { connect } from "react-redux";

const PlayerItem = (props) => (
  <div>
    {props.player.id &&
      <div>
        <p>{props.player.firstName} {props.player.lastName}</p>
        <p>{props.player.team}</p>
        <p>Season 2018/2019</p>
        <p>Games played: {props.player.gamesPlayed}</p>
        <p>points per game: {props.player.avgPts}</p>
        <p>assists per game: {props.player.avgAst}</p>
        <p>rebounds per game: {props.player.avgReb}</p>
      </div>}
  </div>
);

export default PlayerItem;