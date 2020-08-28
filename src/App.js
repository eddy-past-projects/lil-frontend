import React from 'react';
import './App.css';
// import Home from './components/Home';
import ImageContainer from './containers/ImageContainer';
import CharacterContainer from './containers/CharacterContainer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: 0,
			id: 0,
			isArticleListPage: true,
			isArticlePage: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		const { id } = event.target;
		console.log(id);

		this.setState({
			id: event.target.id,
			isArticleListPage: false,
			isArticlePage: true,
			selected: id
		});
	}

	render() {
		console.log(this.state.selected);
		return (
			<div className="App">
				<section className="main-container">
					<div className="container">
						{/* <div className="col first-col"> */}
						<Sidebar onClick={this.handleClick} />
					</div>
				</section>
				<Content selected={this.state.selected} />
				{/* </div> */}
			</div>
		);
	}
}

export default App;
