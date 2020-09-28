import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Create from './components/pages/Create';
import About from './components/pages/About';

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
				<Route exact path='/' component={Home} />
				<Route exact path='/create' component={Create} />
				<Route exact path='/about' component={About} />
			</Switch>
		</Router>
	);
};

export default App;
