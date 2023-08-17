import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/martial-arts-logo1.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import ActiveLink from '../../../ActiveLink/ActiveLink';


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const [checkUser, setCheckUser] = useState()


    useEffect(() => {
        fetch('https://art-of-defense-server-side-sakib56.vercel.app/userEmail')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const userinfo = data.find(dt => dt.email == user?.email)
                setCheckUser(userinfo?.role)
            })
    }, [user])
   

    console.log(checkUser)
    const navOptions = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
        <li><ActiveLink to='/classes'>Classes</ActiveLink></li>
        {
            checkUser == 'student' && <li><Link to='/dashboard/mySelectedClass '>Dashboard </Link></li>
        }
        {
            checkUser == 'instructor' && <li><Link to='/dashboard/addAClass '>Dashboard </Link></li>
        }
        {
            checkUser == 'admin' && <li><Link to='/dashboard/manageClasses'>Dashboard </Link></li>
        }


    </>
    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(error => console.error())
    }
    return (
        <div className=''>
             <div className="navbar lg:px-20 text-white fixed z-10 bg-opacity-30 bg-black max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#182236] text-white rounded-box w-52 z-20">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className='flex items-center'>
                            <img className='w-8 h-8 lg:w-10 lg:h-10 opacity-80' src={logoImg} alt="" />
                            <span className='text-xs text-white text-opacity-75 italic lg:text-2xl lg:font-bold font-serif'> Art Of Defense</span>
                        </div>
                        <div className='uppercase text-center font-mono text-white text-[8px] md:text-lg text-opacity-75 italic'>Martial arts school</div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-lg text-white text-opacity-90 font-serif uppercase">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {user ? <>
                        <img className='w-8 h-8 lg:w-12 lg:h-12 rounded-full lg:mr-5' src={user.photoURL} alt="" />
                        <button onClick={handleLogout} className='text-white border border-secondary px-2 py-1 lg:px-5 lg:py-2 text-base lg:text-lg font-serif'>Logout</button>
                    </> :
                        <>
                            <Link to='/login'><button className='text-white border border-secondary px-2 py-1 md:px-5 md:py-2 text-base lg:text-lg font-serif'>Login</button></Link>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;