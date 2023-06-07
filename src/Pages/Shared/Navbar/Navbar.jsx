import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/martial-arts-logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/privatePage'>privatePage</Link></li>

    </>
    return (
        <div className=''>
            <div className="navbar bg-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="btn btn-ghost normal-case text-xl">
                        <img className='w-10 h-10' src={logoImg} alt="" />
                        <span className='text-3xl font-bold'> Art Of Defense</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <>
                        <img className='w-12 h-12' src={user.photoURL} alt="" />
                        <button className='btn btn-outline'>Logout</button>
                    </> :
                        <>
                            <button className='btn btn-outline'>Login</button>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;