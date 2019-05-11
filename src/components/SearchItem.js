import React from "react";

const SearchItem = (props) => (
  <div>
    <a href="#">{props.player.first_name} {props.player.last_name}</a>
  </div>
);

export default SearchItem;