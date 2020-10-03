import React, { useState, useEffect } from 'react';
import Post from '../pages/Posts';

const Single = ({ match }) => {
	const { id } = match.params;
	const [post, setPost] = useState({});

	useEffect(() => {
		const fetchPost = async () => {
			const res = await fetch(`/posts/${id}`);
			const data = await res.json();

			setPost(data);
		};

		fetchPost();

		// eslint-disable-next-line
	}, []);

	return (
		<div className='form-header'>
			<h2>Single Post</h2>
			<br />
			<Post url={post.image && post.image.url} desc={post.description} likes={post.likes} />
		</div>
	);
};

export default Single;
