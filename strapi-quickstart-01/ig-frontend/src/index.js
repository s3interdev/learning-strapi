import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserContextProvider from './context/user/UserContext';
import LikesContextProvider from './context/likes/LikesContext';

ReactDOM.render(
	<React.StrictMode>
		<UserContextProvider>
			<LikesContextProvider>
				<App />
			</LikesContextProvider>
		</UserContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
