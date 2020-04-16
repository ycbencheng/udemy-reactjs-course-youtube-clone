import React from "react";

import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div
      class="video-item item"
      onClick={() => props.onVideoSelect(props.video)}
    >
      <img
        class="ui image"
        alt=""
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div class="content">
        <div class="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
