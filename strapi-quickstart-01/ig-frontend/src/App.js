import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Create from './components/pages/Create';
import Login from './components/pages/Login';
import Single from './components/pages/Single';

import './App.css';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/create' component={Create} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/:id' component={Single} />
			</Switch>
		</Router>
	);
};

export default App;
