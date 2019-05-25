import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>Hoops Center</h1>
    <NavLink className="header__navLink" activeClassName="header__activeLink" to="/" exact={true}>Home</NavLink>
    <NavLink className="header__navLink" activeClassName="header__activeLink" to="/search">Player Search</NavLink>
    <NavLink className="header__navLink" activeClassName="header__activeLink" to="/compare">Compare Page</NavLink>
  </header>
);

export default Header;