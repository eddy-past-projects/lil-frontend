import React from 'react';

// Components
// import Search from "../search/search";
import CardOverview from './CardOverview';

// Images
// var a = this.props.character; //undefined

// setTimeout(function() {
// 	var a = this.props.character; //voila!
// }, 100);

class Sidebar extends React.Component {
	render() {
		const { characters } = this.props;
		console.log(
			'this.props',
			this.props,
			'this.props.name',
			this.props.name,
			'this.props.location',
			this.props.location,
			'this.props.image',
			this.props.image,
			'this.props.character',
			this.props.character,
			'this.props.characters',
			this.props.characters
		);
		// console.log(this.props.character);
		// console.log(this.props.character.name);

		return (
			<div>
				<section className="sidebar" />
			</div>
		);
	}
}

export default Sidebar;
