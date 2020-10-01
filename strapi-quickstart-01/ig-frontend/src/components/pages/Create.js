import React, { useState } from 'react';

const Create = () => {
	// declare application state
	const [description, setDescription] = useState('');
	const [file, setFile] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData();

		formData.append('data', JSON.stringify({ description }));
		formData.append('files.image', file);

		const res = await fetch('/posts', {
			method: 'POST',
			body: formData,
		});

		const data = await res.json();

		console.log('data :', data);
	};

	return (
		<div className='container'>
			<div className='columns mx-4 my-4'>
				<div className='column'>
					<form className='box' onSubmit={handleSubmit}>
						<h1 className='title is-4'>Create Post</h1>
						<div className='field'>
							<label className='label'>Description</label>
							<div className='control has-icons-left'>
								<input
									type='text'
									className='input'
									value={description}
									onChange={(event) => setDescription(event.target.value)}
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
								<input type='file' className='input' onChange={(event) => setFile(event.target.files[0])} />
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
