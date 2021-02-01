import React, { Component, useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import "./app.css";

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyCS8TEpiToeD1FyhU_13__Cbq7e41TjGt8",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
    }, []);

    return <VideoList videos={videos} />;
}
export default App;
