import React, { Component } from 'react';
import CharactersCard from './CharactersCard';

class CardDetailed extends Component {
	// filterImages(allImages) {
	// 	return allImages
	// 		.filter((image) => image.id === selected)
	// 		.map((image) => <CharactersCard className="characters" key={image.id} />);
	// }

	render() {
		console.log(this.props);
		// Grab the 'characters' object from App.js, and assign it to 'this.props'
		const { characters, selected } = this.props;

		// Filter the chracters and return only whose 'id' belongs to that of '6'
		// const filteredCharacters = characters.filter((character) => character.id === selected).map((character) => (<div className="characters" key={character.id}>));

		return (
			<div />
			// <div>{this.filterImages(allImages)}</div>;
		);
	}
}

export default CardDetailed;
