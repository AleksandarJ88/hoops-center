import React from "react";
import ShowPlayer from "./ShowPlayer";
import SearchResults from "./SearchResults";
import SearchFilter from "./SearchFilter";
import { connect } from "react-redux";

const SearchPage = (props) => (
  <div>
    <p>Here you can search by name or surname for any active NBA player. Type at least three characters, then press Search button or Enter key on your keyboard. You can also add someone to the Compare screen by clicking the button below the player information.</p>
    <SearchFilter />
    <SearchResults />
    <ShowPlayer route={props.history}/>
  </div>
);

export default connect()(SearchPage);