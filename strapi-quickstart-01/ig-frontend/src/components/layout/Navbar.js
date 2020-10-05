import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user/UserContext';

const Navbar = () => {
	const { user } = useContext(UserContext);

	const authLinks = (
		<Fragment>
			<li>
				<Link to='/'> Home </Link>
			</li>
			<li>
				<Link to='/create'> Create </Link>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/'> Home </Link>
			</li>
			<li>
				<Link to='/login'> Login </Link>
			</li>
			<li>
				<Link to='/Signup'> Signup </Link>
			</li>
		</Fragment>
	);

	return (
		<div className='navbar'>
			<ul className='list-pipe'>{user ? authLinks : guestLinks}</ul>
		</div>
	);
};

export default Navbar;
