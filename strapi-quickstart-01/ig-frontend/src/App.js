import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Create from './components/pages/Create';
import About from './components/pages/About';

import './App.css';

const App = () => {
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
