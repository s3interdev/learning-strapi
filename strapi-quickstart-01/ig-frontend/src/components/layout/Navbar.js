import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className='blue' role='navigation'>
				<div className='nav-wrapper container'>
					<a href='' className='brand-logo'>
						BlogCards
					</a>
					<a href='' data-target='mobile-sidenav' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li>
							<a href=''>Home</a>
						</li>
						<li>
							<a href=''>Create Post</a>
						</li>
						<li>
							<a href=''>About</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-sidenav'>
				<li>
					<a href=''>Home</a>
				</li>
				<li>
					<a href=''>Create Post</a>
				</li>
				<li>
					<a href=''>About</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
