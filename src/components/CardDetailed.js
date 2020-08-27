import React, { Component } from 'react';
import CharactersCard from './CharactersCard';

class CardDetailed extends Component {
	filterCharacters(characters) {
		return characters.characters
			.filter((character) => character.id === this.props.selected)
			.map((character) => <CharactersCard character={character} key={character.id} />);
	}

	render() {
		const { characters, selected } = this.props;
		// console.log(characters, selected);

		// const filteredCharacters = characters.characters
		// 	.filter((character) => character.id === selected)
		// 	.map((character) => (
		// 		<div className="characters" key={character.id}>
		// 			{character.name}
		// 			{character.location}
		// 		</div>
		// 	));

		// console.log(
		// 	'this.props',
		// 	this.props,
		// 	'this.props.characters',
		// 	this.props.characters,
		// 	'this.props.selected',
		// 	this.props.selected
		// );
		// Grab the 'characters' object from App.js, and assign it to 'this.props'

		// Filter the chracters and return only whose 'id' belongs to that of '6'
		// const filteredCharacters = characters.filter((character) => character.id === selected).map((character) => (<div className="characters" key={character.id}>));

		return <div>{this.filterCharacters(characters)}</div>;
	}
}

export default CardDetailed;

{
	/* <CharactersCard filteredCharacters={filteredCharacters} /> */
	{
		/* <CharactersCard filterCharacters={this.filterCharacters(characters)} /> */
	}
}
