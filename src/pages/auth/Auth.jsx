import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../components/topNav/TopNav';
import Footer from '../../components/footer/Footer';

const Auth = () => {
    return (
		<div>
			<div className='bg-char'>
				<TopNav></TopNav>
			</div>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Auth;