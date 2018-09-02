import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
