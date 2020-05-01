import React from "react";

import "./VideoItem.css";

const VideoItem = (props) => {
  console.log(props);
  return (
    <div class="video-item item">
      <img class="ui image" src={props.video.snippet.thumbnails.medium.url} />
      <div class="content">
        <div class="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
