import React from 'react';
import Posts from './components/pages/Posts';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<h1>This is the BlogPics App</h1>
				<p>2 + 2</p>
				<p>{2 + 2}</p>
				<Posts />
			</div>
		</div>
	);
}

export default App;
