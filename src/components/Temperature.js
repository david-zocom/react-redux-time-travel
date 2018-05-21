import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionRaiseTemperature, actionLowerTemperature, actionUndo} from '../actions/actions.js';

class Temperature extends Component {
	render() {
		return (
			<div className="temperature">
			Temperaturen är: <strong>{this.props.temperature} grader</strong> <br/>
			<button onClick={this.handleClickRaise}>Höj</button>
			<button onClick={this.handleClickLower}>Sänk</button>
			<button onClick={this.handleUndo} disabled={!this.props.canUndo}>Ångra temperatur</button>
			</div>
		);
	}
	handleUndo = event => {
		this.props.dispatch( actionUndo() );
	}
	handleClickRaise = event => {
		let action = actionRaiseTemperature();
		this.props.dispatch(action);
	}
	handleClickLower = event => {
		console.log('handleClickLower');
		let action = actionLowerTemperature();
		this.props.dispatch(action);
	}
}
let mapStateToProps = state => {
	return {
		temperature: state.temperature.present,
		canUndo: state.temperature.past.length >= 1
	};
}
export default connect(mapStateToProps)(Temperature);
