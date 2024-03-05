import React from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom'

import { ICats } from './utils/interfaces';
import Main from './pages/Main';

function App() {
	const [cats, setCats] = React.useState<ICats[] | null>(null)
	const [home, setHome] = React.useState('home')
	// const key = 'live_QtS0Dp5idEcUwsAriNi9C2PnwXXnpJOq4ELmuPY1BwbQGMEzg7Z9t9qKK9oYMUMH';

	React.useEffect(() => {

		async function fetchCats() {
			try {
				// const { data } = await axios.get<ICats>('https://api.thecatapi.com/v1/images/search?limit=5&api_key=' + key)
				const { data } = await axios.get<ICats[]>('https://jsonplaceholder.typicode.com/photos')
				setCats(data)
			} catch (error) {
				alert('Error fetching')
			}
		}


		fetchCats()

	}, [])

	return (
		<div className="App">
			<header className='header'>
				<div className="container">
					<Link to={'/'} className={home === 'home' ? "header__main header__block --active" : "header__main header__block"} onClick={() => setHome('home')}>Все котики</Link>
					<Link to={'/liked'} className={home === 'liked' ? "header__liked header__block --active" : "header__liked header__block"} onClick={() => setHome('liked')}>Любимые котики</Link>
				</div>
			</header>
			<section className='main container' >
				<Main cats={cats} />

			</section >
			<div className="loading">... загружаем еще котиков ...</div>
		</div >





	);
}

export default App;




