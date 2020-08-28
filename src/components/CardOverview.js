import React, { Component } from 'react';

class CardOverview extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<section className="card-overview" id={this.props.id} onClick={this.props.onClick}>
					<img src={this.props.image} alt={this.props.name} />

					<p>{this.props.name}</p>
				</section>
			</div>
		);
	}
}

export default CardOverview;
