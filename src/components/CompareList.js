import React from "react";
import { connect } from "react-redux";
import CompareItem from "./CompareItem";

const CompareList = (props) => (
  <div>
    <h3>Compare Screen</h3>
    {props.compare.map(player => {
      return <CompareItem key={player.id} player={player}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    player: state.player,
    compare: state.compare
  };
};

export default connect(mapStateToProps)(CompareList);