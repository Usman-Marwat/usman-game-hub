import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import GameDetailPage from './pages/GameDetailPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'games/:slug', element: <GameDetailPage /> },
		],
	},
]);

export default router;

/*
"errorElement" is not rendered inside <outlet> of <layout> component.
Only the children would be rendered. So we have to add <Navbar> in
<ErrorPage>. 
*/
