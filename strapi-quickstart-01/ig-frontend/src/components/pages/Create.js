import React, { useState } from 'react';

const Create = () => {
	const [description, setDescription] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const res = await fetch('/posts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ description }),
		});

		const data = await res.json();

		console.log('data :', data);
	};

	return (
		<div className='container'>
			<h5 className='center'>Create Post</h5>
			<div className='row'>
				<form className='col s12' onSubmit={handleSubmit}>
					<div className='row'>
						<div className='input-field col s12'>
							<input type='text' id='description' value={description} onChange={(event) => setDescription(event.target.value)} />
							<label htmlFor='description'>Description</label>
							<button className='btn'>Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Create;
