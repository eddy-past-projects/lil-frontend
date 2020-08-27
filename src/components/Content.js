import React from 'react';
// import Images from '../components/Images';
// import ImageCard from '../components/ImageCard';
import CardDetailed from './CardDetailed';
import Sidebar from './Sidebar';
import Characters from './Characters';

class Content extends React.Component {
	state = {
		characters: []
	};

	componentDidMount() {
		fetch('http://localhost:3000/images').then((resp) => resp.json()).then((resp) => {
			this.setState({ characters: resp });
		});
		// console.log(this.state);
	}

	render() {
		// const { characters } = this.state;
		// console.log(this.state, 'this.state');

		return (
			<div>
				<CardDetailed characters={this.state} selected={this.props.selected} />
				<Sidebar characters={this.state} />
				<Characters characters={this.state} />
			</div>
		);
	}
}

export default Content;
