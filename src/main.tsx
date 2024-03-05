import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";


import './index.scss';
import App from './App';
import ErrorPage from './pages/Error';
import Main from './pages/Main';


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Main cats={null} />,
				errorElement: <ErrorPage />,
			},
		]
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(

	<RouterProvider router={router} />

);
