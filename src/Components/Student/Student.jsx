import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Student = () => {
    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Student;