import React, { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";

function App() {
    const [videos, setVideos] = useState([]);
    const search = (query) => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCS8TEpiToeD1FyhU_13__Cbq7e41TjGt8`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) =>
                result.items.map((item) => ({ ...item, id: item.id.videoId }))
            )
            .then((items) => setVideos(items))
            .catch((error) => console.log("error", error));
    };
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

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} />
            <VideoList videos={videos} />
        </div>
    );
}
export default App;
