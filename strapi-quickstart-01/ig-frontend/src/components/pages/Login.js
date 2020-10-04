import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const res = await fetch('/auth/local/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ identifier: email, password: password }),
		});

		const data = await res.json();

		console.log(data, ' has logged in...');
	};

	return (
		<div className='form-header'>
			<h2>Login</h2>
			<br />
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email Address</label>
					<br />
					<input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
				</div>
				<div>
					<label>Password</label>
					<br />
					<input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
				</div>
				<br />
				<br />
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
