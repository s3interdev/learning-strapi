import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Posts from './components/pages/Posts';

import './App.css';

const App = () => {
	// default state set to an empty list
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// initialize materialize js
		M.AutoInit();

		const getPosts = async () => {
			const res = await fetch('/posts');
			const data = await res.json();

			setPosts(data);
		};

		getPosts();

		// eslint-disable-next-line
	}, []);

	return (
		<Router>
			<div>
				<Navbar />
				<div className='container'>
					<div className='row'>
						{posts.map((post, index) => (
							<Posts key={index} likes={post.likes} desc={post.description} url={post.image.url} />
						))}
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
