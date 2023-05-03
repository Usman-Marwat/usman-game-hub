//In this file we specify that all pages should have navigation bar at the top

import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Layout() {
	return (
		<>
			<NavBar />
			<Box padding={5}>
				<Outlet />
			</Box>
		</>
	);
}

export default Layout;
