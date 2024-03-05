import React from 'react'

import { ICats } from '../utils/interfaces'

const Cat: React.FC<ICats> = ({ url, id }) => {


	return (
		<div className="test__item" key={id} >
			<img className='test__img' src={url} alt="awesome cat" />

		</div>
	)
}

export default Cat
