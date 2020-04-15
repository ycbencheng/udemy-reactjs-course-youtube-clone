import React from "react";

const VideoItem = (props) => {
  console.log(props);
  return (
    <div>
      <img
        scr={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />
      {props.video.snippet.title}
    </div>
  );
};

export default VideoItem;
