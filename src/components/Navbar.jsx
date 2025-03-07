import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LAB - WikiCountries
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
