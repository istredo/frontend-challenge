import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { ICats } from '../utils/interfaces';
import Cat from '../components/Cat';
import { RootState } from '../redux/store'

const Main = () => {


	const cats = useSelector((state: RootState) => state.favorites.cats)

	const dispatch = useDispatch()






	if (!cats) {
		return <>Загрузка...</>;
	}

	return (
		<div className="cats__container">
			{
				cats.map((cat: ICats) =>
					<Cat key={cat.id} url={cat.url} id={cat.id} />)
			}
		</div>
	)
}

// export default React.memo(Main)
export default Main
