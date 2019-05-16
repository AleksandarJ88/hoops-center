import React from "react";
import showPlayerAsync from "../actions/player";
import { connect } from "react-redux";

const SearchItem = (props) => (
  <div>
    <a 
      href="javascript:void(0);"
      onClick={() => props.dispatch(showPlayerAsync(props.player.id))}>
      <p>
        {props.player.first_name} {props.player.last_name}
      </p>
    </a>
  </div>
);

export default connect()(SearchItem);