import React, { Component } from "react";

const youTube = {
    key: "AIzaSyCS8TEpiToeD1FyhU_13__Cbq7e41TjGt8",
    part: "snippet",
    max: 25,
};

class Video extends Component {
    state = {};

    // searchYoutube = ({ part, max, key }, callback) => {
    //     const httpRequest = new XMLHttpRequest();
    //     httpRequest.open(
    //         "GET",
    //         `https://www.googleapis.com/youtube/v3/search?part=${part}&maxResults=${max}&q=${this.props.item}&key=${key}}`
    //     );
    //     httpRequest.send();
    //     httpRequest.onreadystatechange = () => {
    //         if (httpRequest.readyState === httpRequest.DONE) {
    //             if (httpRequest.status === 200) {
    //                 const response = JSON.parse(httpRequest.responseText);
    //                 callback(response.items);
    //             } else {
    //                 console.error(httpRequest.responseText);
    //             }
    //         }
    //     };
    // };

    // goToSearch = (result) => {
    //     this.searchYoutube(youTube, (result) => {
    //         this.setState({ videos: [...result], current: result[0] });
    //     });
    // };

    // componentDidMount() {
    //     this.goToSearch();
    // }
    requestOptions = {
        method: "GET",
    };

    componentDidMount() {
        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=${youTube.part}&maxResults=${youTube.max}&q=${this.props.item}&key=${youTube.key}}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ videos: [...data], current: data[0] });
            });
    }

    render() {
        return (
            <span>
                <iframe
                    className="video-player"
                    url={`https://www.googleapis.com/youtube/v3/search?part=${this.state.part}&maxResults=${this.state.maxResults}&q=bts&key=${this.state.key}}`}
                ></iframe>
            </span>
        );
    }
}

export default Video;
