import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { searchTerm: "" };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div class="search-bar ui segment">
        <form class="ui form" onSubmit={this.onFormSubmit}>
          <div class="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
