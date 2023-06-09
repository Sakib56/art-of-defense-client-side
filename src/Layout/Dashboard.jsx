import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#0D233B] text-white font-bold text-xl space-y-3">
                        {/* Sidebar content here */}
                        <li className='bg-slate-700 rounded-lg'><Link to='/'>HomePage</Link></li>
                        <li className='bg-slate-700 rounded-lg'><Link>My Selected Class</Link></li>
                        <li className='bg-slate-700 rounded-lg'><Link>My Enrolled Class</Link></li>
                        <li className='bg-slate-700 rounded-lg'><Link>Payment History</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;