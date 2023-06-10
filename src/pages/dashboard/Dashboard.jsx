import React, { useContext } from 'react';
import TopNav from '../../components/topNav/TopNav';
import Footer from '../../components/footer/Footer';
import { RoleContext } from '../../providers/RoleProvider';

const Dashboard = () => {

    const {userRole} = useContext(RoleContext); 

    console.log(userRole);
    return (
        <div>
            <div className='bg-char'>
                <TopNav></TopNav>
            </div>
            <div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;