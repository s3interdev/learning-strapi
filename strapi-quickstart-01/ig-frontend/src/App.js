import React from 'react';
import Posts from './components/pages/Posts';
import './App.css';

const posts = [
	{
		likes: 5,
		description: 'The Balloon Trip to Remember 1',
		image: {
			url: '/uploads/ballons_e8c3b6838b.jpg',
		},
	},
	{
		likes: 15,
		description: 'The Balloon Trip to Remember 2',
		image: {
			url: '/uploads/ballons_e8c3b6838b.jpg',
		},
	},
	{
		likes: 3,
		description: 'The Balloon Trip to Remember 3',
		image: {
			url: '/uploads/ballons_e8c3b6838b.jpg',
		},
	},
];
function App() {
	return (
		<div className='container'>
			{posts.map((post, index) => (
				<Posts key={index} likes={post.likes} desc={post.description} url={post.image.url} />
			))}
		</div>
	);
}

export default App;
