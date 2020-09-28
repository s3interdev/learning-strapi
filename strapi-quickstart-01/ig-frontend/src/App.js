import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import './App.css';

const App = () => {
	useEffect(() => {
		// initialize materialize js
		M.AutoInit();

		// eslint-disable-next-line
	}, []);

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
