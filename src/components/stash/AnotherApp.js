import React from 'react';
import './App.css';
// import Home from './components/Home';
import ImageContainer from './containers/ImageContainer';
import CharacterContainer from './containers/CharacterContainer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends React.Component {
	state = {
		selected: 4
	};

	handleClick = (id) => {
		this.setState({ selected: id });
	};

	render() {
		console.log(this.state.selected);
		return (
			<div className="App">
				<section className="main">
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
