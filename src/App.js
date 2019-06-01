import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import RoutePaths from './App/RoutePaths.js';
import HomeBg from './Home/HomeBg.js';
import MenuAppBar from './Home/AppBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
        <HomeBg />
      </div>
    );
  }
}

export default App;
