import React from 'react';

const Posts = ({ url, desc, likes }) => {
	return (
		<div className='col s12 m4'>
			<div className='card medium'>
				<div className='card-image'>
					<img className='responsive-img' src={url} alt='' />
				</div>
				<div className='card-content'>
					<span className='card-title'>{desc}</span>
					<p>
						<span>Likes: {likes}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Posts;
