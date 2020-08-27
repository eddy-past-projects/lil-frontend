import React, { Component } from 'react';
import CharactersCard from './CharactersCard';

class CardDetailed extends Component {
	filterCharacters(characters) {
		return characters.characters.find((character) => character.id === this.props.selected);
	}
	// console.log(character.id === this.props.selected)
	// );
	// filteredCharacters=() => {
	// characters.filter((character) => character.id === selected).map((character) => (
	// 		<div className="characters" key={character.id}>
	// 			{character.image}
	// 			<p>{character.name}</p>
	// 			<p>{character.location}</p>
	// 		</div>

	// 	// .map((character) =>

	// 	//   <CharactersCard className="something" key={character.id} />);
	// }
	// findImage(characters) {
	// 	return characters.characters.find((character) => character.id === this.props.selected  <CharactersCard />
	// 		// console.log(character.id, this.props.selected);

	// 	});
	// }

	render() {
		const { characters, selected } = this.props;
		console.log(characters, selected);

		// const filteredCharacters = characters.filter((character) => character.id === selected).map((character) => (
		// 	<div className="characters" key={character.id}>
		// 		{character.image}
		// 		<p>{character.name}</p>
		// 		<p>{character.location}</p>
		// 	</div>
		// ));
		// 	const filteredCharacters = characters.filter((character) => character.id === selected).map((character) => (
		// 	<div className="characters" key={character.id}>
		// 		{character.image}
		// 		<p>{character.name}</p>
		// 		<p>{character.location}</p>
		// 	</div>
		// ));

		console.log(
			'this.props',
			this.props,
			'this.props.characters',
			this.props.characters,
			'this.props.selected',
			this.props.selected
		);
		// Grab the 'characters' object from App.js, and assign it to 'this.props'

		// Filter the chracters and return only whose 'id' belongs to that of '6'
		// const filteredCharacters = characters.filter((character) => character.id === selected).map((character) => (<div className="characters" key={character.id}>));

		return (
			<div>
				<CharactersCard filterCharacters={this.filterCharacters(characters)} />
			</div>
		);
	}
}

export default CardDetailed;

{
	/* <CharactersCard filteredCharacters={filteredCharacters} /> */
}
