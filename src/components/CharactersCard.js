import React from 'react';
import { Card } from 'semantic-ui-react';
// import { Card, Image } from 'semantic-ui-react';

class CharactersCard extends React.Component {
	// const {name, image, location} = props.image

	render() {
		const foundCharacter = this.props.character;
		console.log(
			'this.props',
			this.props,
			'this.props.character.name',
			this.props.character.name,
			// 'this.props.filterCharacters.name',
			// this.props.filterCharacters.name,
			// typeof this.props.filterCharacters,
			// JSON.stringify(this.props.filterCharacters.name),
			foundCharacter
			// JSON.parse(JSON.stringify(this.props.filterCharacters))
		);

		// var a = this.props.col_id_3; //undefined

		// setTimeout(function() {
		// 	var a = config.col_id_3; //voila!
		// }, 100);
		// const { onClick } = this.props;

		// const { photo } = this.props.photo;
		// console.log(
		// 	'hi',
		// 	this.props,
		// 	'this.props.photo',
		// 	this.props.photo,
		// 	'this.props.photo.image',
		// 	this.props.photo.image
		// );
		return (
			<Card>
				{/* <div className="image-card">
					<img src={this.props.filterCharacters.image} className="solo-image" />
					<h3>{this.props.filterCharacters.name}</h3>
				</div> */}
			</Card>
		);
	}
}
export default CharactersCard;

// class Child extends React.Component {
//    render() {
//        const {onClick} = this.props;
//        return <button onClick={onClick}>Hide Parent</button>;
//    }
// }
