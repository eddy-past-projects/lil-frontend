import React from 'react';
import ImageCard from './ImageCard';

import { Card, Image } from 'semantic-ui-react';

// const Images = (props) => {
//   // imageOnClick = () => {};

// 	const allimages = props.images;

// 	return allimages.map((photo) => {
// 		return <ImageCard key={photo.id} photo={photo} className="photo" data-id={photo.id} data-name={photo.name} />;
// 	});
// };

// export default Images;

class Images extends React.Component {
	// constructor() {
	// 	super(...arguments);
	// 	this.state = { hide: false };
	// }
	// // handleChildClick() {
	// 	this.setState({ hide: true });
	// }

	// return allimages.map((photo) => {
	// 	return <ImageCard key={photo.id} photo={photo} className="photo" data-id={photo.id} data-name={photo.name} />;
	// });

	render() {
		console.log(this.props);
		const allImages = this.props.images;
		console.log(allImages);
		// const { hide } = this.state;
		// if (hide) {
		// 	return null;
		// }
		return this.props.images.map((image) => {
			return (
				<ImageCard
					key={image.id}
					image={image}
					className="solo-card"
					data-id={image.id}
					// onClick={this.handleChildClick.bind(this)}
				/>
			);
		});
	}
}

export default Images;

// class Child extends React.Component {
//    render() {
//        const {onClick} = this.props;
//        return <button onClick={onClick}>Hide Parent</button>;
//    }
// }
