import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/user/UserContext';

const Signup = ({ history }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		// if the user is successfully logged in take them to the home page
		if (user) {
			history.push('/');
		}

		// eslint-disable-next-line
	}, [user]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const res = await fetch('/auth/local/register', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({
					username: username,
					email: email,
					password: password,
				}),
			});

			const data = await res.json();

			console.log(data.user.username, 'has signed up and logged in...');

			if (data.message) {
				setError(data.message[0].messages[0].message);

				// stop execution until error is corrected
				return;
			}

			setUser(data);
		} catch (err) {
			setError('An error has occured ' + err);
		}
	};

	return (
		<div className='form-header'>
			<h2>Signup</h2>
			<br />
			<form onSubmit={handleSubmit}>
				{error && <p className='entry-error'>{error}</p>}
				<div>
					<label>Username</label>
					<br />
					<input
						type='text'
						required
						value={username}
						onChange={(event) => {
							setError('');
							setUsername(event.target.value);
						}}
					/>
				</div>
				<div>
					<label>Email Address</label>
					<br />
					<input
						type='email'
						value={email}
						onChange={(event) => {
							setError('');
							setEmail(event.target.value);
						}}
					/>
				</div>
				<div>
					<label>Password</label>
					<br />
					<input
						type='password'
						value={password}
						onChange={(event) => {
							setError('');
							setPassword(event.target.value);
						}}
					/>
				</div>
				<br />
				<br />
				<div>
					<button>Signup</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
