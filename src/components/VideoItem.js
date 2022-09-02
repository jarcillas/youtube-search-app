import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="item video-item"
      onClick={(e) => {
        e.preventDefault();
        onVideoSelect(video);
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <a className="header" href="/">
          {video.snippet.title}
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
