import React, { Component } from "react";
import Search from "./search";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fab fa-youtube"></i>
                <span className="navbar-main">Youtube</span>
                <Search />
            </nav>
        );
    }
}

export default Navbar;
