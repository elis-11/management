import { useState, useEffect } from 'react';
import './App.scss';

function App() {
	const [ users, setUsers ] = useState([]);

	useEffect(() => {
		(async () => {
      const response = await fetch('http://localhost:3022')
			const users = await response.json();
			setUsers(users);
		})();
	}, []);

	return (
		<div className="App">
			<h1>User Management App</h1>
			<section className="users">
				<ul>
					{users.map((user, index) => {
						return <li key={index}>{user.name}</li>;
					})}
				</ul>
			</section>
		</div>
	);
}

export default App;
