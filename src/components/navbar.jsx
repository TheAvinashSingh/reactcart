import React, { Component } from "react";

const Navbar = ({totalCounters}) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand'>
  NavBar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};
 
export default Navbar;