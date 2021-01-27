import React from 'react';
import VideoList from './VideoList';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div 
        onClick={() => onVideoSelect(video)}
        className="video-item item"
        >
            <img 
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}
                </div>
            </div>  
        </div>
    );
}

export default VideoItem;