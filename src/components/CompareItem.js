import React from "react";
import { removeFromCompare } from "../actions/compare";
import { resetState } from "../actions/errors";

/*Child of CompareList Component, used to display players' stats on compare page.
It recieves state data from parent component via props and displays it to UI.
*/

const CompareItem = (props) => (
  <div>
  {props.player.id &&
    <div className="player--compare">
      <p>{props.player.firstName} {props.player.lastName}</p>
      <p>{props.player.team}</p>
      <p>Season 2018/2019</p>
      <p>Games played: {props.player.gamesPlayed}</p>
      <div className="player__stats">
        <p>points per game: {props.player.avgPts}</p>
        <p>assists per game: {props.player.avgAst}</p>
        <p>rebounds per game: {props.player.avgReb}</p>
      </div>
      <button onClick={() => {
      props.dispatchCall(removeFromCompare(props.player.id));
      props.dispatchCall(resetState());
      }}>Remove</button>
    </div>}
  </div>
);

export default CompareItem;