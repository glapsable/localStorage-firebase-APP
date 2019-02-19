import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>To jest moja apka</h1>
    <NavLink to="/">LocalStorage</NavLink>
    <NavLink to="/firebase">Firebase</NavLink>
  </header>
);

export default Header;
