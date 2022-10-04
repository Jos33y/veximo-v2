import React from "react";
import "./styles.css";
import {Link, NavLink} from "react-router-dom";

const NavHeader = () => {
    return (
        <>
            <div className="Header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Veximo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/trades">Trades</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products">Products</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about_us">About us</NavLink>
                                </li>
                            </ul>

                            <div className="d-flex buttons">
                                <Link to="/signin" className="btn btn-md btn-secondary" > Sign In</Link>
                                <Link to="/signup" className="btn btn-md btn-primary" > Create account</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}
export default NavHeader