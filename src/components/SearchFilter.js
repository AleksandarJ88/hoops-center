import React from "react";
import { connect } from "react-redux";
import { filterPlayersAsync, setTextFilter, removeEveryone } from "../actions/filters";
import { resetState } from "../actions/errors"

const SearchFilter = (props) => (
  <div>
    <form className="search" onSubmit={e => {
      e.preventDefault();
      props.dispatch(removeEveryone());
      props.dispatch(filterPlayersAsync(props.textFilter.text));
      props.dispatch(setTextFilter());
    }}>
      <input
        className="search__input"
        type="text"
        name="player"
        placeholder="Enter player name"
        autoComplete="off"
        value={props.textFilter.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value))
        }}
      />
      <button>Search</button>
    </form>
  </div>
);

const mapStateToProps = (state) => {
  return {
    textFilter: state.textFilter
  };
};

export default connect(mapStateToProps)(SearchFilter);