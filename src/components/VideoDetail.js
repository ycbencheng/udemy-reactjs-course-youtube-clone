import React from "react";

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <div class="ui embed">
        <iframe src={videoSrc} />
      </div>
      <div class="ui segment">
        <h4 class="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
