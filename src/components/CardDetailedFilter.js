import React, { Component } from 'react';
import CharactersCard from './CharactersCard';
import Sidebar from './Sidebar';

class CardDetailedFilter extends Component {
	filterAllCharacters(characters) {
		return characters.characters
			.filter((character) => character.id === this.props.selected)
			.map((character) => <CharactersCard character={character} key={character.id} />);
	}

	// renderAllCharacters(characters) {
	// 	return characters.characters.map((character) => <Sidebar character={character} key={character.id} />);
	// }

	render() {
		const { characters, selected } = this.props;

		return (
			<div>
				{this.filterAllCharacters(characters)}
				{/* {this.renderAllCharacters(characters)} */}
			</div>
		);
	}
}

export default CardDetailedFilter;
