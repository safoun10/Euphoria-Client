import React, { useContext } from 'react';
import TopNav from '../../components/topNav/TopNav';
import Footer from '../../components/footer/Footer';
import DashboardData from '../../components/dashboardData/DashboardData';

const Dashboard = () => {
    return (
        <div>
            <div className='bg-char'>
                <TopNav></TopNav>
            </div>
            <div>
                <DashboardData></DashboardData>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;