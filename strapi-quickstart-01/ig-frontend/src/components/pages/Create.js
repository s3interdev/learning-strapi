import React, { useState } from 'react';

const Create = () => {
	// declare application state
	const [description, setDescription] = useState('');
	const [file, setFile] = useState(null);
	const [error, setError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		// entry validation
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
				body: formData,
			});

			const data = await res.json();

			console.log('data :', data);
		} catch (err) {
			setError(err);
		}
	};

	return (
		<div className='container'>
			<div className='columns mx-4 my-4'>
				<div className='column'>
					<form className='box' onSubmit={handleSubmit}>
						<h1 className='title is-4'>Create Post</h1>

						{error && <p className='has-text-danger'>{error}</p>}

						<div className='field'>
							<label className='label'>Description</label>
							<div className='control has-icons-left'>
								<input
									type='text'
									className='input'
									value={description}
									onChange={(event) => {
										setError('');
										setDescription(event.target.value);
									}}
									placeholder='Say something about the post...'
								/>
								<span className='icon is-small is-left'>
									<i className='fas fa-edit'></i>
								</span>
							</div>
						</div>
						<div className='field'>
							<label className='label'>Choose File to Upload</label>
							<div className='control'>
								<input
									type='file'
									className='input'
									onChange={(event) => {
										setError('');
										setFile(event.target.files[0]);
									}}
								/>
							</div>
						</div>
						<div className='field'>
							<button className='button is-primary'>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Create;
