import React from "react";
import { connect } from "react-redux";
import PlayerItem from "./PlayerItem";
import { addToCompareAsync, addToCompare } from "../actions/compare";

const ShowPlayer = (props) => (
  <div>
    <h3>Selected Player</h3>
    <PlayerItem player={props.player}/>
    {props.player.id &&
      <button
        onClick={() => {
          if(props.compare.length < 2) {
            props.dispatch(addToCompareAsync(props.player.id));
            props.route.push("/compare");
          } else {
            
          }
        }
      }>Add to compare screen</button>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    player: state.player,
    filteredPlayers: state.filteredPlayers,
    compare: state.compare
  };
};

export default connect(mapStateToProps)(ShowPlayer);