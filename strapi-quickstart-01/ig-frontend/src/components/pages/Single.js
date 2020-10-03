import React, { useState, useEffect, Fragment } from 'react';
import Post from '../pages/Posts';

const Single = ({ match, history }) => {
	const { id } = match.params;
	const [post, setPost] = useState({});
	const [loading, setLoading] = useState(true);

	const handleDelete = async () => {
		const res = await fetch(`/posts/${id}`, { method: 'DELETE' });
		const data = await res.json();

		console.log(data, ' has been deleted.');

		// redirect back to home page
		history.push('/');
	};

	useEffect(() => {
		const fetchPost = async () => {
			const res = await fetch(`/posts/${id}`);
			const data = await res.json();

			setPost(data);
			setLoading(false);
		};

		fetchPost();

		// eslint-disable-next-line
	}, []);

	return (
		<div className='form-header'>
			<h2>Single Post</h2>
			<br />
			{loading && <p>Loading post...</p>}
			{!loading && (
				<Fragment>
					{post.id && (
						<Fragment>
							<Post url={post.image && post.image.url} desc={post.description} likes={post.likes} />
							<button onClick={handleDelete}>Delete Post</button>
						</Fragment>
					)}
					{!post.id && <p>The post you are looking for does not exist.</p>}
				</Fragment>
			)}
		</div>
	);
};

export default Single;
