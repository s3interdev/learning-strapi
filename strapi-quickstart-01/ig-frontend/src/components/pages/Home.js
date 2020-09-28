import React, { useState, useEffect } from 'react';
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
		<div className='container'>
			<div className='row'>
				{posts.map((post, index) => (
					<Posts key={index} likes={post.likes} desc={post.description} url={post.image.url} />
				))}
			</div>
		</div>
	);
};

export default Home;
