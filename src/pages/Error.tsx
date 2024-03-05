import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom'
import { IError } from "../utils/interfaces";


export default function ErrorPage() {


	const error: IError = useRouteError() as IError;


	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>Try again later</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>

			<Link to={'/'}>go home</Link>
		</div>
	);
}