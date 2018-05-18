import {RAISE_TEMP, LOWER_TEMP, UNDO} from '../actions/constants.js';
import {combineReducers} from 'redux';

let temperatureReducer = (state={past:[], present:30, future:[]}, action) => {
	switch( action.type ) {
		case UNDO:
			if( state.past.length < 1 )
				return state;
			let last = state.past[state.past.length - 1];
			return {
				past: state.past.filter(x => x !== last),
				present: last,
				future: [state.present, ...state.future]
			};
		case RAISE_TEMP:
			return {
				past: [...state.past, state.present],
				present: state.present + action.amount,
				future: []
			};
		case LOWER_TEMP:
		default:
			return state;
	}
}
/*let actionHistoryReducer = (state=[], action) => {
	return [...state, action];
}*/
let rootReducer = combineReducers({
	temperature: temperatureReducer
});
export default rootReducer;
