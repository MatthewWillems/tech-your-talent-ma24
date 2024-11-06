import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/Home';

const Entrypoint = () => {

	const router = createBrowserRouter([{
		path: '/',
		element: <App />
	}]);

	return (
		<RouterProvider router={router} />
	)
};

export default Entrypoint;
