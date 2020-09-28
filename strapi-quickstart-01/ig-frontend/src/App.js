import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Posts from './components/pages/Posts';

import './App.css';

const mockPosts = [
	{
		likes: 5,
		description: 'The Balloon Trip to Remember 1',
		image: {
			url: 'https://res.cloudinary.com/superior-software-solutions-limited/image/upload/v1601299100/ballons_b730ac2114.jpg',
		},
	},
	{
		likes: 15,
		description: 'The Balloon Trip to Remember 2',
		image: {
			url: 'https://res.cloudinary.com/superior-software-solutions-limited/image/upload/v1601299100/ballons_b730ac2114.jpg',
		},
	},
	{
		likes: 3,
		description: 'The Balloon Trip to Remember 3',
		image: {
			url: 'https://res.cloudinary.com/superior-software-solutions-limited/image/upload/v1601299100/ballons_b730ac2114.jpg',
		},
	},
	{
		likes: 3,
		description: 'The Balloon Trip to Remember 4',
		image: {
			url: 'https://res.cloudinary.com/superior-software-solutions-limited/image/upload/v1601299100/ballons_b730ac2114.jpg',
		},
	},
	{
		likes: 3,
		description: 'The Balloon Trip to Remember 5',
		image: {
			url: 'https://res.cloudinary.com/superior-software-solutions-limited/image/upload/v1601299100/ballons_b730ac2114.jpg',
		},
	},
];

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
	);
};

export default App;
