import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';


import './index.scss';
import App from './App';
import ErrorPage from './pages/Error';
import Liked from './pages/Liked';
import Main from './pages/Main';


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Main />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/liked",
				element: <Liked />,
				errorElement: <ErrorPage />,
			},

		]
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider >
);
