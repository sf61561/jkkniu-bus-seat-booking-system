import React from 'react';
import { NavLink } from 'react-router-dom';

const Busroute = () => {
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh_-_80px)]'>
            <div className='text-black flex flex-col items-center text-2xl gap-5 border-2 border-[#39ad50] p-20 border-dashed rounded-2xl'>
                <NavLink to="/student/campustomymensingh" className='text-blue-500 hover:underline'>Campus to Mymensingh</NavLink>
                <NavLink to="/student/mymensinghtocampus" className='text-blue-500 hover:underline'>Mymensingh to Campus</NavLink>
                <NavLink to="/student/campustobhaluka" className='text-blue-500 hover:underline'>Campus to Bhaluka</NavLink>
                <NavLink to="/student/bhalukatocampus" className='text-blue-500 hover:underline'>Bhaluka to Campus</NavLink>
            </div>
        </div>
    );
};

export default Busroute;