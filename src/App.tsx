import React from 'react';
import { Link, Outlet } from 'react-router-dom'


import axios from 'axios';


import { useDispatch } from 'react-redux'
import { ICats } from './utils/interfaces';
import { key } from './utils/const';
import { setCats, setFavorite } from './redux/slices/favoriteSlice';

function App() {

	const [home, setHome] = React.useState(false)

	const dispatch = useDispatch()
	async function fetchCats() {
		try {
			const { data } = await axios.get<ICats[]>('https://api.thecatapi.com/v1/images/search?limit=100&api_key=' + key)
			// const { data } = await axios.get<ICats[]>('https://jsonplaceholder.typicode.com/photos')
			dispatch(setCats(data))
		} catch (error) {
			alert('Error fetching')
		}
	}

	React.useEffect(() => {

		async function parseStorage() {
			try {
				const data = await localStorage.getItem('favorites');
				const favorite = data ? JSON.parse(data) : []
				dispatch(setFavorite(favorite))
			} catch (error) {
				alert('Error fetching LS')
			}

		}

		setHome(!window.location.href.includes('liked'))
		fetchCats()
		parseStorage()

	}, [])




	return (
		<div className="App">
			<header className='header'>
				<div className="container">
					<Link to={'/'} className={home ? "header__main header__block --active" : "header__main header__block"} onClick={() => setHome(true)}>Все котики</Link>
					<Link to={'/liked'} className={!home ? "header__liked header__block --active" : "header__liked header__block"} onClick={() => setHome(false)}>Любимые котики</Link>
					{home ? <button className="header__block" onClick={fetchCats}> Обновить список котиков</button> : ''}
				</div>
			</header>
			<section className='main container' >
				<Outlet />
			</section >
		</div >
	);
}

export default App;




