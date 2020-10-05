import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/user/UserContext';

const Create = ({ history }) => {
	// declare application state
	const [description, setDescription] = useState('');
	const [file, setFile] = useState(null);
	const [error, setError] = useState('');

	// gain access to the authenticated user
	const { user } = useContext(UserContext);

	const handleSubmit = async (event) => {
		event.preventDefault();

		// entry validation
		if (!user) {
			setError('Please log in to post content.');
		}

		if (!description) {
			setError('Please add post description.');
			return;
		}

		if (!file) {
			setError('Please add a post image.');
			return;
		}

		const formData = new FormData();

		formData.append('data', JSON.stringify({ description }));
		formData.append('files.image', file);

		try {
			const res = await fetch('/posts', {
				method: 'POST',
				headers: { Authorization: `Bearer ${user.jwt}` },
				body: formData,
			});

			const data = await res.json();

			console.log(data, ' has been created...');

			// redirect back to home page
			history.push('/');
		} catch (err) {
			setError(err);
		}
	};

	return (
		<div className='form-header'>
			<h2>Create Post</h2>
			<br />
			<form onSubmit={handleSubmit}>
				{error && <p className='entry-error'>{error}</p>}
				<div>
					<label>Description:</label>
					<br />
					<input
						type='text'
						value={description}
						onChange={(event) => {
							setError('');
							setDescription(event.target.value);
						}}
					/>
				</div>
				<br />
				<div>
					<label>Choose file to upload:</label>
					<br />
					<input
						type='file'
						className='input'
						onChange={(event) => {
							setError('');
							setFile(event.target.files[0]);
						}}
					/>
				</div>
				<br />
				<br />
				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Create;
