import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="app-nav-list">
      <li className="app-nav-item">
        <NavLink to="/" exact className="app-nav-link" activeClassName="active">Home</NavLink>
      </li>
      <li className="app-nav-item">
        <NavLink to="/about" className="app-nav-link" activeClassName="active">About</NavLink>
      </li>
      <li className="app-nav-item">
        <NavLink to="/about/team" className="app-nav-link" activeClassName="active">Our Team</NavLink>
      </li>
      <li className="app-nav-item">
        <NavLink to="/contact" className="app-nav-link" activeClassName="active">Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
