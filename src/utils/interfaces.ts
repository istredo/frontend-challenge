export interface ICats {
	id: string,
	url: string
}
export interface IError {
	statusText?: string,
	message?: string,
}
export enum Status {
	LOADING = 'loading',
	SUCCESS = 'completed',
	ERROR = 'error',
}
export interface favoriteSliceState {
	favorites: string[],
	cats: ICats[],
	status: Status
}
