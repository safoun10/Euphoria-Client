import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../components/topNav/TopNav';

const Auth = () => {
    return (
		<div>
			<div className='bg-char'>
				<TopNav></TopNav>
			</div>
			<Outlet></Outlet>
		</div>
	);
};

export default Auth;