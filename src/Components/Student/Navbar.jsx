import React from 'react';
import logo from '../../assets/images/JKKNIU.PNG'
const Navbar = () => {
    return (
        <div className='flex items-center bg-white h-[80px] px-5 shadow-xl'>
            <img src={logo} alt=""  className='h-[40px]'/>
        </div>
    );
};

export default Navbar;