import React from "react";
import { showPlayerAsync } from "../actions/player";
import { connect } from "react-redux";
import { resetState } from "../actions/errors";

/*
Using asynchronous action, we are displaying stats of a player from a filtered players list
user decided to click on by dispatching showPlayerAsync action generator.
*/

const SearchItem = (props) => (
  <div>
    <a
      className="search-result"
      href="javascript:void(0);"
      onClick={() => {
        props.dispatch(showPlayerAsync(props.player.id));
        props.dispatch(resetState());
      }}>
      <p>
        {props.player.last_name}, {props.player.first_name}
      </p>
    </a>
  </div>
);

export default connect()(SearchItem);