import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from '../user/UserContext';

export const LikesContext = createContext(null);

export default ({ children }) => {
	const { user } = useContext(UserContext);
	const [likesGiven, setLikesGiven] = useState([]);
	const [likesReceived, setLikesReceived] = useState([]);

	useEffect(() => {
		if (user) {
			const loadLikesGiven = async () => {
				const res = await fetch(`/likes/given?user=${user.user.id}`, {
					headers: { Authorization: `Bearer ${user.jwt}` },
				});

				const data = await res.json();

				setLikesGiven(data);
			};

			loadLikesGiven();

			const loadLikesReceived = async () => {
				const res = await fetch(`/likes/received?post.author=${user.user.id}`, {
					headers: { Authorization: `Bearer ${user.jwt}` },
				});

				const data = await res.json();

				setLikesReceived(data);
			};

			loadLikesReceived();
		}

		// eslint-disable-next-line
	}, [user]);

	return <LikesContext.Provider value={{ likesGiven, likesReceived }}>{children}</LikesContext.Provider>;
};
