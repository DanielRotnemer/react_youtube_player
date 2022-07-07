import React from 'react';
import '../VideoDetail.css';

const VideoDetail  = ({ video }) => {
    if (!video) {
        return <div>Loading videos...</div>
    }

    const srcLink = `https://www.youtube.com/embed/${video.id.videoId}`; 

    return (<div>
        <div className="embed">
            <iframe src={srcLink} title={video.id.videoId}></iframe>
        </div>
        <div className="title">{video.snippet.title}</div>
    </div>);
}

export default VideoDetail;