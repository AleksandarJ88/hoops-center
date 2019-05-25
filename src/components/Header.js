import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1><i className="fas fa-basketball-ball"></i> Hoops Center</h1>
    <NavLink className="header__navLink" activeClassName="header__activeLink" to="/" exact={true}><i className="fas fa-home"></i> Home</NavLink>
    <NavLink className="header__navLink" activeClassName="header__activeLink" to="/search"><i className="fas fa-search"></i> Player Search</NavLink>
    <NavLink className="header__navLink" activeClassName="header__activeLink" to="/compare"><i className="fas fa-stream"></i> Compare Page</NavLink>
  </header>
);

export default Header;