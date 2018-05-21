import React, {Component} from 'react';
import {connect} from 'react-redux';

class Furniture extends Component {
	render() {
		const list = this.props.products
		.map( x => (
			<li key={x.name + x.description}>
				<div> {x.name} {x.price}
					<button>Köp</button> </div>
				<div> {x.description} </div>
			</li>
		) );
		return (
			<ul> {list} </ul>
		);
	}
}

let mapStateToProps = state => {
	return {
		products: state.products.present
	}
}
export default connect(mapStateToProps)(Furniture);

//
