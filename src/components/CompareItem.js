import React from "react";
import { removeFromCompare } from "../actions/compare";
import { resetState } from "../actions/errors";

const CompareItem = (props) => (
  <div>
    {props.player.id && <p>First name: {props.player.firstName}</p>}
    {props.player.id && <p>Last name: {props.player.lastName}</p>}
    {props.player.id && <p>Team: {props.player.team}</p>}
    {props.player.id && <button onClick={() => {
      props.dispatchCall(removeFromCompare(props.player.id));
      props.dispatchCall(resetState());
    }}>Remove</button>}
  </div>
);

export default CompareItem;