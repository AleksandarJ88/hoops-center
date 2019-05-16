import React from "react";
import ShowPlayer from "./ShowPlayer";
import SearchResults from "./SearchResults";
import SearchFilter from "./SearchFilter";
import { connect } from "react-redux";

const SearchPage = (props) => (
  <div>
    This is Search Page
    <SearchFilter />
    <SearchResults />
    <ShowPlayer route={props.history}/>
  </div>
);

export default connect()(SearchPage);