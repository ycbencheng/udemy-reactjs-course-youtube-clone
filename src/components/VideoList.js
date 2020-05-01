import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const list = props.videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div class="ui relax divided list">{list}</div>;
};

export default VideoList;
