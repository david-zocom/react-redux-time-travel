import {RAISE_TEMP, LOWER_TEMP, UNDO, REDO, ADD_FURNITURE, UNDO_FURNITURE, REDO_FURNITURE} from '../actions/constants.js';
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
			return {
				past: [...state.past, state.present],
				present: state.present - action.amount,
				future: []
			}
		default:
			return state;
	}
}
/*let actionHistoryReducer = (state=[], action) => {
	return [...state, action];
}*/
let furnitureReducer = (state={past:[],present:[],future:[]}, action) => {
	switch( action.type ) {
		case ADD_FURNITURE:
			return {
				past: [
					...state.past,
					state.present
				],
				present: [...state.present, action.furniture],
				future: []
			};
			case UNDO_FURNITURE:
				let lastPast = state.past[state.past.length - 1];
				return {
					past: state.past.filter( x => x !== lastPast ),
					present: lastPast,
					future: [state.present, ...state.future]
				};
			case REDO_FURNITURE:
				let firstFuture = state.future[0];
				return {
					past: [...state.past, state.present],
					present: firstFuture,
					future: state.future.filter(x => x !== firstFuture)
				};
		default:
			return state;
	}
}

let rootReducer = combineReducers({
	temperature: temperatureReducer,
	products: furnitureReducer
});
export default rootReducer;
