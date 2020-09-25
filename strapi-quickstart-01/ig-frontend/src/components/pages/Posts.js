import React from 'react';

const Posts = ({ url, desc, likes }) => {
	return (
		<div className='card'>
			<div className='card-header'>
				<img src={url} alt='' />
			</div>
			<div className='card-body'>
				<h4>{desc}</h4>
				<p>
					<span>Likes: {likes}</span>
				</p>
			</div>
		</div>
	);
};

export default Posts;
