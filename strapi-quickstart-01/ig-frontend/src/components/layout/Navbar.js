import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user/UserContext';

const Navbar = () => {
	const { user } = useContext(UserContext);

	return (
		<div className='navbar'>
			<Link to='/'>Home </Link>
			{user && <Link to='/create'> Create </Link>}
			{!user && <Link to='/login'> Login </Link>}
		</div>
	);
};

export default Navbar;
