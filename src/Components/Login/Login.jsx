import React, { useState, useEffect } from 'react';
import profileImg from '../../assets/images/535389156_122292630104010824_6881921173641357124_n.jpg';
import logo from '../../assets/images/JKKNIU.png'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const Login = () => {
    const handleModal=(text1) => {
        Swal.fire({
            title: 'Error!',
            text: `Invalid ${text1} or Password`,
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    const [visited,setVisited] = useState(true);
    const [visited1,setVisited1] = useState(false);
    const [visited2,setVisited2] = useState(false);
    const handleVisit=(v1,v2,v3) => {
        setVisited(v1);
        setVisited1(v2);
        setVisited2(v3);
    }
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('/student.json')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);
    const handleStdntSubmit = (e) => {
        e.preventDefault();
        const reg = e.target.reg.value;
        const password = e.target.password.value;
        const student = students.find(student => student.reg === reg && student.password === password);
        e.target.reg.value="";
        e.target.password.value="";
        if (student) {
            navigate('/student');
        } else {
            handleModal("Reg.");
        }
    }
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        fetch('/driver.json')
            .then(response => response.json())
            .then(data => setDrivers(data))
            .catch(error => console.error('Error fetching drivers:', error));
    }, []);
    const handleDriverSubmit = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const password = e.target.password.value;
        const driver = drivers.find(driver => driver.userid === id && driver.password === password);
        if (driver) {
            navigate('/driver');
        } else {
            handleModal("User Id");
        }
        e.target.id.value="";
        e.target.password.value="";
    }

    return (
        <div className='flex w-full'>
            <img className='w-1/2 max-h-[100vh]' src={profileImg} alt="Profile" />
            <div className=' text-black flex flex-col items-center justify-center min-h-[100vh] w-1/2 bg-white'>
            <img src={logo} alt="" className='mb-5'/>
                <div className='flex gap-2 mb-3'>
                    <button className={`btn ${!visited ? 'bg-white text-black border-1 border-[#39ad50] shadow-0 hover:bg-[#39ad50] hover:text-white' : 'bg-[#39ad50] text-white border-0'}`} onClick={()=> handleVisit(true,false,false)}>Student</button>
                    <button className={`btn ${!visited1 ? 'bg-white text-black border-1 border-[#39ad50] shadow-0 hover:bg-[#39ad50] hover:text-white' : 'bg-[#39ad50] text-white border-0'}`} onClick={()=> handleVisit(false,true,false)}>Bus Driver</button>
                    <button className={`btn ${!visited2 ? 'bg-white text-black border-1 border-[#39ad50] shadow-0 hover:bg-[#39ad50] hover:text-white' : 'bg-[#39ad50] text-white border-0'}`} onClick={()=> handleVisit(false,false,true)}>Transportation Office</button>
                </div>
                <div className={`${visited ? 'flex flex-col items-center' : 'hidden'}`}>
                    <h1 className='text-3xl mb-2 font-bold work-san'>Login</h1>
                    <form className='flex flex-col items-center' onSubmit={(e) => handleStdntSubmit(e)}>
                        <label className='flex flex-col'>
                            Registration No.
                            <input type="text" name="reg" className='w-60 h-8 border-2 border-[#39ad50] rounded-lg focus:outline-none pl-1' required autoComplete='off'/>
                        </label>
                        <label className='flex flex-col'>
                            Password
                            <input type="password" name="password" className='w-60 h-8 border-2 border-[#39ad50] rounded-lg focus:outline-none pl-1' required autoComplete='off'/>
                        </label>
                        <input type="submit" className='btn border-0 bg-[#39ad50] text-white w-20 mt-5'/>
                    </form>
                </div>
                <div className={`${visited1 ? 'flex flex-col items-center' : 'hidden'}`}>
                    <h1 className='text-3xl mb-2 font-bold'>Login</h1>
                    <form className='flex flex-col items-center' onSubmit={(e) => handleDriverSubmit(e)}>
                        <label className='flex flex-col'>
                            User Id
                            <input type="text" name="id" className='w-60 h-8 border-2 border-[#39ad50] rounded-lg focus:outline-none pl-1'/>
                        </label>
                        <label className='flex flex-col'>
                            Password
                            <input type="password" name="password" className='w-60 h-8 border-2 border-[#39ad50] rounded-lg focus:outline-none pl-1' />
                        </label>
                        <input type="submit" className='btn border-0 bg-[#39ad50] text-white w-20 mt-5'/>
                    </form>
                </div>
                <div className={`${visited2 ? 'flex flex-col items-center' : 'hidden'}`}>
                    <h1 className='text-3xl mb-2 font-bold'>Login</h1>
                    <form className='flex flex-col items-center'>
                        <label className='flex flex-col'>
                            User Id
                            <input type="text" name="id" className='w-60 h-8 border-2 border-[#39ad50] rounded-lg focus:outline-none pl-1'/>
                        </label>
                        <label className='flex flex-col'>
                            Password
                            <input type="password" name="password" className='w-60 h-8 border-2 border-[#39ad50] rounded-lg focus:outline-none pl-1' />
                        </label>
                        <input type="submit" className='btn border-0 bg-[#39ad50] text-white w-20 mt-5'/>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;