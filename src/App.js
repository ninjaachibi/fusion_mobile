import React, { Component } from 'react';
import Categories from './categories.js';
import NavBar from './navbar.js';
import PopularItems from './popular.js'; 
import Homepage from './homepage.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Homepage/>
        <PopularItems/>
        <Categories></Categories>
      </div>
    );
  }
}

export default App;