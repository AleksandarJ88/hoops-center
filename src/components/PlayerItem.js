import React from "react";

const PlayerItem = (props) => (
  <div>
    {props.player.id && <p>First name: {props.player.firstName}</p>}
    {props.player.id && <p>Last name: {props.player.lastName}</p>}
    {props.player.id && <p>Team: {props.player.team}</p>}
  </div>
);

export default PlayerItem;