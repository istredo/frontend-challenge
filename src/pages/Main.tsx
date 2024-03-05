import React from 'react';


import { ICats } from '../utils/interfaces';
import Cat from '../components/Cat';


const Main: React.FC<{ cats: ICats[] | null }> = ({ cats }) => {


	if (!cats) {
		return <>Загрузка...</>;
	}
	console.log(cats)
	return (
		<div className="cats__container">
			{
				cats.map((cat: ICats) =>
					<Cat key={cat.id} url={cat.url} id={cat.id} />)
			}
		</div>
	)
}

export default React.memo(Main)