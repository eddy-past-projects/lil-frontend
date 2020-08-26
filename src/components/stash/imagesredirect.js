import React from 'react';
import ImageCard from './ImageCard';
import { Redirect } from 'react-router';
import { Card, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// let cardId;

class Images extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		redirect: false
	// 	};
	// }
	// renderImages(allCards) {
	// 	return allCards.map((card, idx) => <ImageCard key={idx} card={card} data-id={card.id} />);
	// }

	// setRedirect = () => {
	// 	this.setState({ redirect: true });
	// };
	// renderRedirect = () => {
	// 	if (this.state.redirect) {
	// 		return <Redirect to={`/images${cardId}`} />;
	// 	}
	// };

	render() {
		console.log(this.props);
		const allCards = this.props.images;
		console.log(allCards);

		return allCards.map((card) => {
			return (
				<Card key={card.id} className="image-card">
					<Image src={card.image} alt="" className="image-photo" />
					<Card.Content>
						<button className="redirect">
							<a href={`/images${card.id}`}>
								<img src={card.image} />
							</a>
							onClick={() => {
								{
									this.props.renderSingleCard(card.id);
								}
							}}
						</button>
						{/* <div>
<button><a href="#"><Image source={require('./template1.png')} s

						if(this.state.on_adopt)
									{this.renderRedirect()}
									<button
										className="adopt"
										size="mini"
										onClick={() => {
											adoptPet(pet.id);
											{
												this.setRedirect();
											}
										}}
								>


							<Link to={`/images${card.id}`}>
								<img src={card.image} alt="" className="image-photo" />
								{this.renderRedirect()}
								{/* <button
										className="adopt"
										size="mini"
										onClick={() => {
											adoptPet(pet.id); */}
						{/* {this.setRedirect()} */}
						{/* }} */}
						{/* > */}
						{/* {this.props.currentUser.name}</> */}
						{/* onClick={() => { */}
						{/* {this.setRedirect()} */}
						{/* }} */}
						{/* </Link> */}
						{/* </div> */}
					</Card.Content>
				</Card>
			);
		});
	}
}

export default Images;
