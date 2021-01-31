import React, { Component } from "react";
import Search from "./search";

class Navbar extends Component {
    handleSearch = (item) => {
        this.props.onSearch(item);
    };

    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fab fa-youtube"></i>
                <span className="navbar-main">Youtube</span>
                <Search onSearch={this.handleSearch} />
            </nav>
        );
    }
}

export default Navbar;
