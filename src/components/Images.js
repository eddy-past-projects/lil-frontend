import React from 'react';
import ImageCard from './ImageCard';

import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	renderImages(allImages) {
		return allImages.map((image, idx) => <ImageCard key={idx} image={image} />);
	}

	render() {
		console.log(this.props);
		const allImages = this.props.images;
		console.log(allImages);

		return <div>{this.renderImages(allImages)}</div>;
	}
}

export default Images;

// class Child extends React.Component {
//    render() {
//        const {onClick} = this.props;
//        return <button onClick={onClick}>Hide Parent</button>;
//    }
// }
