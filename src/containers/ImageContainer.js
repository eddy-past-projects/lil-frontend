import React from 'react';
import Images from '../components/Images';
import ImageCard from '../components/ImageCard';

class ImagesContainer extends React.Component {
	state = {
		images: [],
		image: {},
		selected: 4
	};

	componentDidMount() {
		fetch('http://localhost:3000/images')
			.then((resp) => resp.json())
			// .then(console.log)
			.then((resp) => {
				this.setState({ images: resp });
			});
	}

	handleClick = (id) => {
		this.setState({ selected: id });
	};

	renderSingleCard = (e) => {
		let cardId = e.target.dataset.id;
		this.props.images.find((image) => {
			return image.id === cardId;
		});
		console.log('hi, cardId', cardId);
		fetch(`http://localhost:3000/images/${cardId}`)
			.then((resp) => resp.json())
			// .then(console.log);
			.then((resp) => {
				this.setState({
					image: resp
				});
				console.log(this.state.image);
			});
		// console.log('click', 'e.target', e.target, 'e.target.dataset.id', e.target.dataset.id, this.props);
	};

	render() {
		const { images } = this.state;
		console.log(this.state, 'this.state.images', this.state.images, 'this.state.image', this.state.image);

		return (
			<div className="container">
				<Images images={images} onClick={this.renderSingleCard} />
				{/* <ImageCard image={image} /> */}
			</div>
		);
	}
}

export default ImagesContainer;
