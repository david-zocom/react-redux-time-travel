import React, { Component } from 'react';
import Temperature from './components/Temperature.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
	  <h3>Magnus möbler</h3>

	  <div>
	    <button disabled>Ångra</button>
	    <button disabled>Gör om</button>
	  </div>

	  <Temperature/>

	  <ul>
	    <li>
	      <div> Fåtölj 1500 <button>Köp!</button> </div>
	      <div> Fantastisk komfort. Svart </div>
	    </li>
	    <li>
	      <div> Soffa 4400 <button>Köp!</button> </div>
	      <div> 3 platser. #ff1133 </div>
	    </li>
	  </ul>

	  <div className="form">
	    <input type="text" placeholder="Möbel"/> <br/>
	    <input type="text" placeholder="Pris"/> <br/>
	    <input type="text" placeholder="Beskrivning"/> <br/>
	    <button>Lägg till möbel</button>
	  </div>
      </div>
    );
  }
}

export default App;
