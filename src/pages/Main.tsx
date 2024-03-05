import React from 'react';
import { useSelector } from 'react-redux'

import { ICats } from '../utils/interfaces';
import Cat from '../components/Cat';
import { selectCat } from '../redux/slices/favoriteSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LIMIT } from '../utils/const';

const Main = () => {
	const { cats } = useSelector(selectCat)

	// infinity scroll-------------

	const [postData, setPostData] = React.useState<ICats[] | []>([])
	const [visible, setVisible] = React.useState(LIMIT)
	const [more, setMore] = React.useState(true)

	React.useEffect(() => {
		setPostData(cats.slice(0, LIMIT))
	}, [cats])


	const fetchData = () => {
		const newLimit = visible + LIMIT;
		const addData = cats.slice(visible, newLimit);
		if (cats.length > postData.length) {
			setTimeout(() => setPostData([...postData].concat(addData)), 2000)
			setVisible(newLimit)
		} else {
			setMore(false)
		}
	}


	return (
		<InfiniteScroll
			className="cats__container"
			dataLength={postData.length}
			next={fetchData}
			hasMore={more}
			style={{ overflow: `visible` }}
			loader={<div className='cats__gag'> Загрузка...</div >}
			endMessage={<div className='cats__gag'>Вы посмотрели всех котиков</div>}
		>
			{
				postData.map((cat: ICats) =>
					<Cat key={cat.id} url={cat.url} id={cat.id} />)
			}
		</InfiniteScroll >

	)
}

// export default React.memo(Main)
export default Main
