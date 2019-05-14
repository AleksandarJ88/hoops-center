import React from "react";
import ShowPlayer from "./ShowPlayer";
import SearchResults from "./SearchResults";
import SearchFilter from "./SearchFilter";

const SearchPage = () => (
  <div>
    This is Search Page
    <SearchFilter />
    <SearchResults />
    <ShowPlayer />
  </div>
);

export default SearchPage;