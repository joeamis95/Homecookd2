import React, { Component } from 'react';
import CarouselDisplay from './Home/Carousel.js';
import MenuAppBar from './Home/AppBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <CarouselDisplay />
      </div>
    );
  }
}

export default App;
