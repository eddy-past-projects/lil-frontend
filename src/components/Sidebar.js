import React from 'react';

// Components
// import Search from "../search/search";
import CardOverview from './CardOverview';
import { Card } from 'semantic-ui-react';

class Sidebar extends React.Component {
	render() {
		const { characters } = this.props;
		const cardId = this.props.id;
		console.log('cardId', cardId, this.props);
		// console.log(
		// 	'this.props',
		// 	this.props,
		// 	'this.props.character',
		// 	this.props.character,
		// 	'this.props.name',
		// 	this.props.name,
		// 	'this.props.location',
		// 	this.props.location,
		// 	'this.props.image',
		// 	this.props.image,
		// 	'this.props.key',
		// 	this.props.key,
		// 	'this.props.id',
		// 	this.props.id
		// );
		// console.log(this.props.character);
		// console.log(this.props.character.name);

		return (
			// <div>
			<Card>
				<section className="image-card">
					<CardOverview
						image={this.props.image}
						location={this.props.location}
						id={this.props.id}
						name={this.props.name}
						// onClick={() => this.props.onClick()}
						// onClick={this.props.onClick}
					/>
				</section>
			</Card>
			// </div>
		);
	}
}

export default Sidebar;
