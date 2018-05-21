import React, { Component } from 'react';
import Temperature from './components/Temperature.js';
import Furniture from './components/Furniture.js';
import AddFurniture from './components/AddFurniture.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
		  <h3>Magnus möbler</h3>
		  <Temperature/>
		  <Furniture/>
		  <AddFurniture/>
      </div>
    );
  }
}

export default App;
