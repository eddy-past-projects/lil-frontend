import React from 'react';
// import Images from '../components/Images';
// import ImageCard from '../components/ImageCard';
import CardDetailedFilter from './CardDetailedFilter';
import Sidebar from './Sidebar';
import AllCharacters from './AllCharacters';

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
				<CardDetailedFilter characters={this.state} selected={this.props.selected} />
				{/* <Sidebar characters={this.state} /> */}
				<AllCharacters characters={this.state} />
			</div>
		);
	}
}

export default Content;
