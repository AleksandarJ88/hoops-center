import React from "react";
import CompareList from "./CompareList";

const ComparePage = () => (
  <div>
    <p>Here you can compare two players side by side, by adding them from Player Search page. You can also remove player from Compare screen by clicking Remove button below the player information.</p>
    <CompareList />
  </div>
);

export default ComparePage;