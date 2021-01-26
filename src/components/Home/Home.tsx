import React from 'react';
import logo from '../../logo.png';
import title from '../../title.png';
import './Home.css';
import { Link } from 'react-router-dom';

interface HomeState {
	characters: string;
	locations: string;
	episodes: string;
}

const Home = ({ locations, episodes, characters }: HomeState) => {

	return (
		<div className="Home">
			<img src={title} className="logo title" alt="title" />
			<Link className="button" to={episodes} target="_self">Episodes</Link>
			<Link className="button" to={locations} target="_self">Locations</Link>
			<Link className="button" to={characters} target="_self">Characters</Link>
			<img src={logo} className="logo spinner" alt="logo" />
		</div>
	);
}

export default Home;
