import {RAISE_TEMP, LOWER_TEMP, UNDO} from './constants.js';

let actionUndo = () => {
	return {
		type: UNDO
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
	actionUndo};
