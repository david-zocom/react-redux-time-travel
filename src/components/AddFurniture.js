import React, {Component} from 'react';
import {actionAddFurniture, actionUndoF, actionRedoF} from '../actions/actions.js';
import {connect} from 'react-redux';

class AddFurniture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: '',
			description: ''
		}
	}
	render() {
		return (
			<React.Fragment>
			<div>
				<button onClick={e => this.props.dispatch(actionUndoF())}
					disabled={!this.props.canUndo}>Ångra möbel</button>
				<button onClick={e => this.props.dispatch(actionRedoF())}
					disabled={!this.props.canRedo}>Gör om möbel</button>
			</div>

			<div className="form">
				<input type="text" placeholder="Möbel"
					value={this.state.name}
					onChange={e => this.setState({name: e.target.value})}
					/> <br/>
				<input type="text" placeholder="Pris"
					value={this.state.price}
					onChange={e => this.setState({price: e.target.value})}
					/> <br/>
				<input type="text" placeholder="Beskrivning"
					value={this.state.description}
					onChange={e => this.setState({description: e.target.value})}
					/> <br/>
				<button onClick={this.handleAddFurniture}>Lägg till möbel</button>
			</div>
			</React.Fragment>
		);
	}
	handleAddFurniture = event => {
		let action = actionAddFurniture({
			name: this.state.name,
			price: this.state.price,
			description: this.state.description
		});
		console.log('AddFurniture: ', action);
		this.props.dispatch(action);
	}
}
let mapStateToProps = state => {
	return {
		canUndo: state.products.past.length > 0,
		canRedo: state.products.future.length > 0
	};
}

export default connect(mapStateToProps)(AddFurniture);

//
