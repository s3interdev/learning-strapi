import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className='teal' role='navigation'>
				<div className='nav-wrapper container'>
					<Link to='/' className='brand-logo'>
						BlogCards
					</Link>
					<a href='#!' data-target='mobile-sidenav' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/create'>Create Post</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-sidenav'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/create'>Create Post</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
