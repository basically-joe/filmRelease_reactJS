import React, { Component } from 'react';
import FilmBox from "./containers/FilmBox"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Upcoming film releases (UK)</h1>
        <FilmBox />
      </div>

    );
  }
}

export default App;
