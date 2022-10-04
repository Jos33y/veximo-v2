import React from "react";
import {NavLink} from "react-bootstrap";
import '../styles/nav.css';

const Nav = () => {
  return (
      <header>
          <nav id="navbar" className="navbar navbar-expand-lg d-flex  animate__fadeInDownBig">
              <div className="container">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <NavLink to=""  className="nav-link">Trades</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="" className="nav-link">Products</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to=""  className="nav-link">About us</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="signin"  className="nav-link sign-in">Sign in</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="signup"  className="nav-link create">Create Account</NavLink>
                      </li>
                  </ul>
              </div>
          </nav>
          <hr/>
      </header>
  );
}
export default Nav;
