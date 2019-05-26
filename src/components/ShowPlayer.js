import React from "react";
import { connect } from "react-redux";
import PlayerItem from "./PlayerItem";
import { addToCompareAsync, addToCompare } from "../actions/compare";
import { tooManyPlayers, playerAlreadyExists } from "../actions/errors";

const ShowPlayer = (props) => (
  <div>
    <p>{props.compare.length === 2 && props.errors.tooManyPlayers}</p>
    <p>{props.errors.playerAlreadyExists}</p>
    <PlayerItem player={props.player}/>
    {props.player.id &&
      <button
        onClick={() => {
          if(props.compare.length === 2) {
            props.dispatch(tooManyPlayers());
          } else if(props.compare.length === 1 && props.compare[0].id === props.player.id) {
            props.dispatch(playerAlreadyExists());
          } else {
            props.dispatch(addToCompareAsync(props.player.id));
            props.route.push("/compare");
          }
        }
      }>Add to compare screen</button>
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    player: state.player,
    filteredPlayers: state.filteredPlayers,
    compare: state.compare,
    errors: state.errors
  };
};

export default connect(mapStateToProps)(ShowPlayer);