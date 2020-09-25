import React from 'react';

const post = {
	_id: '5f6e1d8a7854c73b5413e6b8',
	likes: 5,
	description: 'The Balloon Trip to Remember',
	createdAt: '2020-09-25T16:40:42.557Z',
	updatedAt: '2020-09-25T16:40:43.038Z',
	__v: 0,
	author: {
		confirmed: true,
		blocked: false,
		_id: '5f6e1cd67854c73b5413e6b4',
		username: 'albert',
		email: 'albert@example.com',
		provider: 'local',
		createdAt: '2020-09-25T16:37:42.363Z',
		updatedAt: '2020-09-25T16:37:42.856Z',
		__v: 0,
		created_by: '5f6e0af5a351a83ce8207e2d',
		role: '5f6e0ab9a351a83ce8207d69',
		updated_by: '5f6e0af5a351a83ce8207e2d',
		id: '5f6e1cd67854c73b5413e6b4',
	},
	created_by: {
		_id: '5f6e0af5a351a83ce8207e2d',
		username: null,
		firstname: 'Superior',
		lastname: 'Software Solutions',
		createdAt: '2020-09-25T15:21:25.458Z',
		updatedAt: '2020-09-25T15:21:25.750Z',
		__v: 0,
		id: '5f6e0af5a351a83ce8207e2d',
	},
	image: {
		_id: '5f6e1d617854c73b5413e6b7',
		name: 'ballons.jpg',
		alternativeText: '',
		caption: '',
		hash: 'ballons_e8c3b6838b',
		ext: '.jpg',
		mime: 'image/jpeg',
		size: 64.25,
		width: 1050,
		height: 700,
		url: '/uploads/ballons_e8c3b6838b.jpg',
		formats: {
			thumbnail: {
				name: 'thumbnail_ballons.jpg',
				hash: 'thumbnail_ballons_e8c3b6838b',
				ext: '.jpg',
				mime: 'image/jpeg',
				width: 234,
				height: 156,
				size: 6.29,
				path: null,
				url: '/uploads/thumbnail_ballons_e8c3b6838b.jpg',
			},
			large: {
				name: 'large_ballons.jpg',
				hash: 'large_ballons_e8c3b6838b',
				ext: '.jpg',
				mime: 'image/jpeg',
				width: 1000,
				height: 667,
				size: 59.8,
				path: null,
				url: '/uploads/large_ballons_e8c3b6838b.jpg',
			},
			medium: {
				name: 'medium_ballons.jpg',
				hash: 'medium_ballons_e8c3b6838b',
				ext: '.jpg',
				mime: 'image/jpeg',
				width: 750,
				height: 500,
				size: 38.01,
				path: null,
				url: '/uploads/medium_ballons_e8c3b6838b.jpg',
			},
			small: {
				name: 'small_ballons.jpg',
				hash: 'small_ballons_e8c3b6838b',
				ext: '.jpg',
				mime: 'image/jpeg',
				width: 500,
				height: 333,
				size: 19.5,
				path: null,
				url: '/uploads/small_ballons_e8c3b6838b.jpg',
			},
		},
		provider: 'local',
		related: ['5f6e1d8a7854c73b5413e6b8', '5f6e1db57854c73b5413e6ba'],
		createdAt: '2020-09-25T16:40:01.376Z',
		updatedAt: '2020-09-25T16:41:26.124Z',
		__v: 0,
		created_by: '5f6e0af5a351a83ce8207e2d',
		updated_by: '5f6e0af5a351a83ce8207e2d',
		id: '5f6e1d617854c73b5413e6b7',
	},
	updated_by: {
		_id: '5f6e0af5a351a83ce8207e2d',
		username: null,
		firstname: 'Superior',
		lastname: 'Software Solutions',
		createdAt: '2020-09-25T15:21:25.458Z',
		updatedAt: '2020-09-25T15:21:25.750Z',
		__v: 0,
		id: '5f6e0af5a351a83ce8207e2d',
	},
	id: '5f6e1d8a7854c73b5413e6b8',
};

const Posts = () => {
	const url = post.image.url;
	const description = post.description;
	const likes = post.likes;

	console.log('url: ', url, 'desc: ', description, 'likes :', likes);
	return (
		<div className='card'>
			<div className='card-header'>
				<img src={url} alt='' />
			</div>
			<div className='card-body'>
				<h4>{description}</h4>
				<p>
					<span>Likes: {likes}</span>
				</p>
			</div>
		</div>
	);
};

export default Posts;
