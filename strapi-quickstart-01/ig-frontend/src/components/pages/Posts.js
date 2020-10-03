import React from 'react';

const Posts = ({ url, desc, likes }) => {
	return (
		<div className='post'>
			<img className='post-image' src={url} alt='' />
			<h4>{desc}</h4>
			<p>
				<span>Likes: {likes}</span>
			</p>
		</div>
	);
};

export default Posts;
