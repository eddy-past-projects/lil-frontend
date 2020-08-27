import React from 'react';
import Sidebar from './Sidebar';

// import { Card, Image } from 'semantic-ui-react';

class AllCharacters extends React.Component {
	findAllCharacters(characters) {
		return (
			characters.characters
				// 	.filter((character) => character.id === this.props.selected)
				.map((character) => (
					<Sidebar
						character={character}
						name={character.name}
						location={character.location}
						image={character.image}
						key={character.id}
					/>
				))
		);
	}

	render() {
		const { characters } = this.props;

		return <div>{this.findAllCharacters(characters)}</div>;
	}
}

export default AllCharacters;
