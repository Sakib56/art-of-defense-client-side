import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/martial-arts-logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaMoon, FaRegMoon } from 'react-icons/fa';

const Navbar = ({ toggleTheme, isDarkTheme }) => {
    const { user, logoutUser } = useContext(AuthContext)
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/privatePage'>privatePage</Link></li>

    </>
    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(error => console.error())
    }
    return (
        <div >
            <div className="navbar py-3 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="btn btn-ghost normal-case text-xl">
                        <img className='w-10 h-10' src={logoImg} alt="" />
                        <span className='lg:text-3xl font-bold'> Art Of Defense</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={toggleTheme} className="text-lg mr-5 font-medium">
                        {
                            isDarkTheme ? <div className='flex justify-center items-center'><FaMoon /> <p>Dark</p></div> : <div className='flex justify-center items-center'><FaRegMoon /> <p>Light</p></div>
                        }
                    </button>
                    {user ? <>
                        <img className='w-12 h-12 rounded-full mr-5' src={user.photoURL} alt="" />
                        <button onClick={handleLogout} className='btn btn-neutral'>Logout</button>
                    </> :
                        <>
                            <Link to='/login'><button className='btn btn-neutral'>Login</button></Link>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;