import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../pages/Posts';

const Home = () => {
	// default state set to an empty list
	const [posts, setPosts] = useState([]);

	useEffect(() => {
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
			{posts.map((post) => (
				<Link to={`/${post.id}`} key={post.id}>
					<Posts likes={post.likes} desc={post.description} url={post.image.url} />
				</Link>
			))}
		</div>
	);
};

export default Home;
