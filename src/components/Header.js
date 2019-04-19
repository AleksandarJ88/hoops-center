import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Hoops Center</h1>
    <NavLink to="/" exact="true">Home</NavLink>
    <NavLink to="/search">Search</NavLink>
    <NavLink to="/compare">Compare</NavLink>
  </header>
);

export default Header;