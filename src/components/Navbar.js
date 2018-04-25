import React from 'react';
import "./Navbar.css";

const Navbar = (props) => {

    return (
        <div>
<nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand">LAB</span>
        <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" >Link 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" >Link 2</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" >Link 3</a>
    </li>
  </ul>
        <form className="form-inline search">
            <input className="form-control mr-sm-9" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <span><i className="fa fa-user-circle"></i></span>
        <span><i className="fa fa-bell"></i></span>
        <span><i className="fa fa-question-circle"></i></span>
    </nav>
</div>
    )

}

export default Navbar;

