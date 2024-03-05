import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


import Cat from '../components/Cat'

const Liked = () => {
	const list = useSelector((state: RootState) => state.favorites.favorites)

	return (
		<section className='liked'>
			<div className="cats__container">
				{list ?
					list.map((cat: string) => (
						<Cat key={cat} url={cat} id={cat} />))
					:
					<div>Пока нет любимых котиков</div>
				}
			</div>
		</section>
	)
}

export default Liked
