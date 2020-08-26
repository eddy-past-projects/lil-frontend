import React from 'react';
import ImageCard from './ImageCard';

import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	renderImages(allCards) {
		return allCards.map((card, idx) => <ImageCard key={idx} card={card} data-id={card.id} />);
	}

	render() {
		console.log(this.props);
		const allCards = this.props.images;
		console.log(allCards);

		return <div>{this.renderImages(allCards)}</div>;
	}
}

export default Images;
