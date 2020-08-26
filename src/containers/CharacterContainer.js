import React, { Component } from 'react';

// Components
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
// import Characters from './components/Characters';

class CharacterContainer extends Component {
	state = {
		selected: 4
	};

	handleClick = (id) => {
		this.setState({ selected: id });
	};

	render() {
		console.log(this.state.selected);
		return (
			<div>
				<Sidebar onClick={this.handleClick} />

				<Content selected={this.state.selected} />
			</div>
		);
	}
}

export default CharacterContainer;