import React from "react";
import { connect } from "react-redux";
import SearchItem from "./SearchItem";

const SearchResults = (props) => (
  <div>
    {props.filteredPlayers.map(player => {
      return <SearchItem key={player.id} player={player}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    player: state.player,
    filteredPlayers: state.filteredPlayers
  };
};

export default connect(mapStateToProps)(SearchResults);