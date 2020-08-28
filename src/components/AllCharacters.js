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
						id={character.id}
					/>
				))
		);
	}

	render() {
		const { characters } = this.props;

		return (
			<div>
				<div className="image-card">{this.findAllCharacters(characters)}</div>;
			</div>
		);
	}
}

export default AllCharacters;
