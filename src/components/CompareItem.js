import React from "react";
import { removeFromCompare } from "../actions/compare";
import { resetState } from "../actions/errors";

const CompareItem = (props) => (
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
      <button onClick={() => {
      props.dispatchCall(removeFromCompare(props.player.id));
      props.dispatchCall(resetState());
    }}>Remove</button>
    </div>}
  </div>
);

export default CompareItem;