import React, { useState, useEffect, useContext, Fragment } from 'react';
import { UserContext } from '../../context/user/UserContext';
import Post from '../pages/Posts';

const Single = ({ match, history }) => {
	const { id } = match.params;

	const { user } = useContext(UserContext);

	const [post, setPost] = useState({});
	const [loading, setLoading] = useState(true);
	const [edit, setEdit] = useState(false);
	const [description, setDescription] = useState('');

	const fetchPost = async () => {
		const res = await fetch(`/posts/${id}`);
		const data = await res.json();

		setPost(data);
		setDescription(data.description);
		setLoading(false);
	};

	const handleDelete = async () => {
		const res = await fetch(`/posts/${id}`, {
			method: 'DELETE',
			headers: { Authorization: `Bearer ${user.jwt}` },
		});
		const data = await res.json();

		console.log(data.description, 'has been deleted...');

		// redirect back to home page
		history.push('/');
	};

	const handleEdit = async (event) => {
		event.preventDefault();
		const res = await fetch(`/posts/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.jwt}`,
			},
			body: JSON.stringify({ description }),
		});

		const data = await res.json();

		console.log(data.description, 'has been edited...');

		fetchPost();
	};

	const handleLike = async () => {
		try {
			const res = await fetch('/likes', {
				method: 'Post',
				headers: {
					Authorization: `Bearer ${user.jwt}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					post: parseInt(id),
				}),
			});

			const data = await res.json();

			console.log(data, 'has been liked...');

			fetchPost();
		} catch (err) {
			console.log('Exception: ', err);
		}
	};

	const handleUnlike = async () => {
		try {
			const res = await fetch(`/likes/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${user.jwt}`,
				},
			});

			const data = await res.json();

			console.log(data, 'has been unliked...');

			fetchPost();
		} catch (err) {
			console.log('Exception: ', err);
		}
	};

	useEffect(() => {
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
							<br />
							{user && (
								<Fragment>
									<button onClick={handleLike}>Like</button>
									<button onClick={handleUnlike}>Unlike</button>
									<br />
									<br />
								</Fragment>
							)}
							{user && (
								<Fragment>
									<button onClick={() => setEdit(true)}>Edit Post</button>
									{edit && (
										<form onSubmit={handleEdit}>
											<br />
											<input
												placeholder='New description...'
												value={description}
												onChange={(event) => {
													setDescription(event.target.value);
												}}
											/>
											<button>Confirm Edit</button>
										</form>
									)}
									<br />
									<br />
									<button onClick={handleDelete}>Delete Post</button>
								</Fragment>
							)}
						</Fragment>
					)}
					{!post.id && <p>The post you are looking for does not exist.</p>}
				</Fragment>
			)}
		</div>
	);
};

export default Single;
