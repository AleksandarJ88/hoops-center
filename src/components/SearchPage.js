import React from "react";
import ShowPlayer from "./ShowPlayer";
import SearchResults from "./SearchResults";
import SearchFilter from "./SearchFilter";
import { connect } from "react-redux";

const SearchPage = (props) => (
  <div>
    <p>Search for any active NBA player. Type at least three characters and press Enter key or Search button!</p>
    <SearchFilter />
    <SearchResults />
    <ShowPlayer route={props.history}/>
  </div>
);

export default connect()(SearchPage);