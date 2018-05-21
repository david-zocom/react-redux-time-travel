import {RAISE_TEMP, LOWER_TEMP, UNDO, REDO, ADD_FURNITURE, UNDO_FURNITURE, REDO_FURNITURE} from './constants.js';

let actionUndo = () => {
	return {
		type: UNDO
	};
}
let actionRedo = () => {
	return {
		type: REDO
	};
}
let actionUndoF = () => {
	return {
		type: UNDO_FURNITURE
	};
}
let actionRedoF = () => {
	return {
		type: REDO_FURNITURE
	};
}

let actionAddFurniture = (o) => {
	return {
		type: ADD_FURNITURE,
		furniture: o
	};
}

let actionRaiseTemperature = (amount=1) => {
	return {
		type: RAISE_TEMP,
		amount: amount
	};
}
let actionLowerTemperature = (amount=1) => {
	return {
		type: LOWER_TEMP,
		amount: amount
	};
}

export {actionRaiseTemperature, actionLowerTemperature,
	actionUndo, actionRedo, actionAddFurniture, actionUndoF, actionRedoF};


//
