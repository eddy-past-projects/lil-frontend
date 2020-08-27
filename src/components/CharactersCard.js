import React from 'react';
import { Card } from 'semantic-ui-react';

class CharactersCard extends React.Component {
	// const {name, image, location} = props.image

	render() {
		const foundCharacter = this.props.character;
		console.log('this.props', this.props, 'this.props.character.name', this.props.character.name, foundCharacter);

		// );
		return (
			<Card>
				<div className="image-card">
					<img src={this.props.character.image} className="solo-image" />
					<h3>{this.props.character.name}</h3>
				</div>
			</Card>
		);
	}
}
export default CharactersCard;
