import React, { Component } from "react";
import preload from "../resources/data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  hanldeTermSearch = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>Rate</h1>
          <input
            value={this.state.searchTerm}
            type="text"
            placeholder="search"
            onChange={this.hanldeTermSearch}
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => (
              <ShowCard {...show} key={show.imdbID} />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
