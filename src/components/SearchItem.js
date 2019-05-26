import React from "react";
import { showPlayerAsync } from "../actions/player";
import { connect } from "react-redux";

const SearchItem = (props) => (
  <div>
    <a
      className="search-result"
      href="javascript:void(0);"
      onClick={() => props.dispatch(showPlayerAsync(props.player.id))}>
      <p>
        {props.player.last_name}, {props.player.first_name}
      </p>
    </a>
  </div>
);

export default connect()(SearchItem);