import React from 'react';
import '../VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="item" onClick={()=>onVideoSelect(video)}>
            <img className="itemImg" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;