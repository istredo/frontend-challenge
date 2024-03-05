import { createSlice } from '@reduxjs/toolkit'

import { Status, favoriteSliceState } from '../../utils/interfaces'
import { RootState } from '../store'



const initialState: favoriteSliceState = {

	cats: [],
	favorites: [],
	status: Status.LOADING, // loading | success | error
}

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		setFavorite: (state, action) => {
			state.favorites = action.payload
		},
		toggleFavorite: (state, action) => {
			const setLS = () => localStorage.setItem('favorites', JSON.stringify(state.favorites));
			if (state.favorites.find((favObj) => favObj === action.payload)) {
				state.favorites = state.favorites.filter((item) => item !== action.payload);
				setLS()
			} else {
				state.favorites.push(action.payload)
				setLS()
			}
		},
		setCats: (state, action) => {
			state.cats = action.payload
		}

	},

})

export const selectCat = (state: RootState) => state.favorites
export const { setFavorite, toggleFavorite, setCats } = favoriteSlice.actions

export default favoriteSlice.reducer

