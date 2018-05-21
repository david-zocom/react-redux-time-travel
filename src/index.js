import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/reducers.js';

let initialState = {
	//actionHistory: [],
	temperature: {
		past: [], present: 30, future: []
	},
	//dataFromFetch: null,
	products: {
		past: [],
		present: [
			{
				name: 'Fåtölj',
				price: 1500,
				description: 'Fantastisk komfort. Svart'
			},
			{
				name: 'Soffa',
				price: 4400,
				description: '4 platser. #ff1133'
			},
			{
				name: 'Soffa',
				price: 2200,
				description: '2 platser. Mintgrön'
			}
		], // present
		future: []
	}
};
const store = createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
