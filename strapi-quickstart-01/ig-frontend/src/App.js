import React from 'react';
import Posts from './components/pages/Posts';
import './App.css';

const post = {
	likes: 5,
	description: 'The Balloon Trip to Remember',
	image: {
		url: '/uploads/ballons_e8c3b6838b.jpg',
	},
};

function App() {
	return (
		<div className='container'>
			<Posts likes={post.likes} desc={post.description} url={post.image.url} />
		</div>
	);
}

export default App;
