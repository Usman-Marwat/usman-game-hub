//In this file we specify that all pages should have navigation bar at the top

import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Layout() {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}

export default Layout;
