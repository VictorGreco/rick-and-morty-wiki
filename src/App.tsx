import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Section from './components/Section/Section';
import Detail from './components/Detail/Detail';
import axios from 'axios';
import { getEndpoint } from './helper';

function App() {
	const [data, setData]: any = useState();
	const [location, setLocation] = useState(window.location);

	useEffect((): void => {
		axios.get('https://rickandmortyapi.com/api').then(resp => {
			const { characters, locations, episodes } = resp.data;

			setData({
				characters: getEndpoint(characters),
				locations: getEndpoint(locations),
				episodes: getEndpoint(episodes)
			})
		})
	}, []);

	return (
		<Switch>
			<Route exact path='/' render={(): JSX.Element => <Home {...data} /> } />
			<Route exact path='/:section' component={Section} />
			<Route exact path='/:section?page=:page' component={Section} />
			<Route exact path='/:section/:id' component={Detail} />
		</Switch>
	);
}

export default App;
