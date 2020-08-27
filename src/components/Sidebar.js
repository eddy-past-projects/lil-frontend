import React, { Component } from 'react';

// Components
// import Search from "../search/search";
import CardOverview from './CardOverview';

// Images

class Sidebar extends Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<section className="sidebar">
					<CardOverview
						// image={cloudImage}
						// name="Cloud Strife"
						onClick={() => this.props.onClick(1)}
					/>
					{/* <Search placeholder="Type in a character's name..." />
					<CardOverview image={cloudImage} name="Cloud Strife" onClick={() => this.props.onClick(1)} />
					<CardOverview
						image={aerithImage}
						name="Aerith Gainsborough"
						onClick={() => this.props.onClick(2)}
					/>
					<CardOverview image={tifaImage} name="Tifa Lockheart" onClick={() => this.props.onClick(3)} />
					<CardOverview image={barrettImage} name="Barrett Wallace" onClick={() => this.props.onClick(4)} />
					<CardOverview image={redImage} name="Red XIII" onClick={() => this.props.onClick(5)} />
					<CardOverview image={cidImage} name="Cid Highwind" onClick={() => this.props.onClick(6)} />
					<CardOverview image={sephirothImage} name="Sephiroth" onClick={() => this.props.onClick(7)} />
					<CardOverview image={yuffieImage} name="Yuffie Kisaragi" onClick={() => this.props.onClick(8)} />
					<CardOverview image={caitImage} name="Cait Sith" onClick={() => this.props.onClick(9)} />
					<CardOverview
						image={vincentImage}
						name="Vincent Valentine"
						onClick={() => this.props.onClick(10)}
					/> */}
				</section>
			</div>
		);
	}
}

export default Sidebar;
