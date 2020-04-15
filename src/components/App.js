import React, { Component } from "react";

import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

const KEY = "AIzaSyB6SaSa1A1uUl5qIEQOn9gVd5rfrw05GaI";

export default class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div class="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Found {this.state.videos.length} videos.
      </div>
    );
  }
}
