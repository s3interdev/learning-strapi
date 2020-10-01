import React from 'react';

const Posts = ({ url, desc, likes }) => {
	return (
		<div className='column is-4'>
			<div className='card'>
				<div className='card-image'>
					<figure className='image is-4by3'>
						<img className='responsive-img' src={url} alt='' />
					</figure>
				</div>
				<div className='content'>
					<p className='title is-4'>{desc}</p>
					<p>Likes: {likes}</p>
				</div>
			</div>
		</div>
	);
};

export default Posts;
