import React from 'react';
import { Card, Image } from 'semantic-ui-react';
// import { Card, Image } from 'semantic-ui-react';

class CharactersCard extends React.Component {
	// const {name, image, location} = props.image

	render() {
		console.log('this.props', this.props, 'this.props.image', this.props.image);
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
			<div>
				{/* <div className="image-card">
				<img src={this.props.image.image} className="solo-image" />
				<h3>{this.props.image.name}</h3> */}
			</div>
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
