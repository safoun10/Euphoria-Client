import React from 'react';
import TopNav from '../../components/topNav/TopNav';
import Footer from '../../components/footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <div className='bg-char'>
                <TopNav></TopNav>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;