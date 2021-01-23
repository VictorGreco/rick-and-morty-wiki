import React from 'react';
import logo from '../../logo.png';
import title from '../../title.png';
import './Home.css';
import { Link } from "react-router-dom";
import axios from 'axios';

interface HomeState {
	characters: string;
	locations: string;
	episodes: string;
}

class Home extends React.Component<{}, HomeState> {
	constructor(props: any) {
		super(props);

		this.state = {
			characters: '',
			locations: '',
			episodes: ''
		};
	}

	getEndpoint(url: string) {
		const regex = /\/api\/(.*)/;
		const match = url.match(regex);

		return match ? match[1] : '/';
	}
	componentDidMount() {
		axios.get('https://rickandmortyapi.com/api').then(resp => this.setState({
			characters: this.getEndpoint(resp.data.characters),
			locations: this.getEndpoint(resp.data.locations),
			episodes: this.getEndpoint(resp.data.episodes),
		}))
	}

	render() {
		return (
			<div className="Home">
				<img src={title} className="logo" alt="title" />
				<Link className="button" to={this.state.episodes} target="_self">Episodes</Link>
				<Link className="button" to={this.state.locations} target="_self">Locations</Link>
				<Link className="button" to={this.state.characters} target="_self">Characters</Link>
				<img src={logo} className="logo spinner" alt="logo" />
			</div>
		);
	}
}

export default Home;
