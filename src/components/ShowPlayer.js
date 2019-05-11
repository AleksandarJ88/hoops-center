import React from "react";
import { connect } from "react-redux";
import PlayerItem from "./PlayerItem";

const ShowPlayer = (props) => (
  <div>
    <h3>Selected Player</h3>
    <PlayerItem player={props.player} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    player: state.player,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ShowPlayer);