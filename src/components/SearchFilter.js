import React from "react";
import { connect } from "react-redux";
import filterPlayersAsync from "../actions/filters";

const SearchFilter = (props) => (
  <div>
    <input type="text" value={props.textFilter.text} onChange={e => {
      props.dispatch(filterPlayersAsync(e.target.value));
    }} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    textFilter: state.textFilter
  };
};

export default connect(mapStateToProps)(SearchFilter);