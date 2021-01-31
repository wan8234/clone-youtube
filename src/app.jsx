import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Video from "./components/video";

class App extends Component {
    state = {
        item: null,
    };
    handleSearch = (item) => {
        this.setState({ item: item });
    };

    render() {
        return (
            <>
                <Navbar onSearch={this.handleSearch} />
                <Video item={this.state.item} />
            </>
        );
    }
}

export default App;
