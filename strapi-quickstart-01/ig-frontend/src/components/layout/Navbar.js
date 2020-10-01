import React, { useState } from 'react';

const Navbar = () => {
	const [isActive, setisActive] = useState(false);

	return (
		<nav className='navbar has-shadow is-primary has-text-weight-medium' role='navigation' aria-label='main-navigation'>
			<div className='navbar-brand'>
				<a href='/' className='navbar-item'>
					<span className='title is-4 has-text-white'>BlogCards</span>
				</a>
				<a
					href='#!'
					onClick={() => {
						setisActive(!isActive);
					}}
					role='button'
					className={`navbar-burger ${isActive ? 'is-active' : ''}`}
					aria-label='menu'
					aria-expanded='false'
					data-target='responsiveNavbar'
				>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</a>
			</div>

			<div id='responsiveNavbar' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
				<div className='navbar-end'>
					<a href='/create' className='navbar-item'>
						Create Post
					</a>
					<a href='/about' className='navbar-item'>
						About
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
