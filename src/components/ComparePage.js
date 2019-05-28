import React from "react";
import CompareList from "./CompareList";

const ComparePage = () => (
  <div>
    <p className="paragraph-default">Here you can compare two players side by side, by adding them from Player Search page. Remove player by clicking Remove button below the player information.</p>
    <CompareList />
  </div>
);

export default ComparePage;