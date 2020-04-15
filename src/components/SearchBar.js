import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { searchTerm: "" };

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div class="search-bar ui segment">
        <form class="ui form" onSubmit={this.handleFormSubmit}>
          <div class="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
