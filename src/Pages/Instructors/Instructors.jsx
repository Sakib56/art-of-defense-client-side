import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import InstructorsBanner from './InstructorsBanner';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Instructors = () => {
    const [instructorsData, setInstructors] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://art-of-defense-server-side-sakib56.vercel.app/instructors')
            .then(res => {
                console.log(res.data)
                setInstructors(res.data)
                setLoading(false)
            })
            .catch(error => console.error())
    }, [])
    return (
        <div className='bg-gradient-to-r from-[#1F2D48] to-[#1f3c48fd] text-white'>
            <InstructorsBanner></InstructorsBanner>
            <div className='py-8 lg:py-20 max-w-7xl mx-auto'>
                <h1 className='text-center font-serif text-secondary font-bold text-lg lg:text-4xl'>All instructors</h1>
                {
                    loading ? <>
                        <div className='text-center mt-10'><ClipLoader
                            color="#36d7b7"
                            // loading={loading}
                            // cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> </div>
                    </> : <div className='mt-5 md:mt-10'>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-0">
                            {
                                instructorsData.map((instructor, index) => <div className='shadow-xl p-3 md:p-7 bg-primary bg-opacity-20 rounded-lg text-center border border-white hover:bg-primary hover:bg-opacity-50'>
                                    <img className='w-20 md:w-32 h-20 md:h-32 rounded-full mx-auto' src={instructor.photo} alt="" />
                                    <p className='text-xs md:text-2xl text-white text-opacity-70 italic font-serif font-bold md:mt-3 text-center'>{instructor.name}</p>
                                    <p className='text-[10px] md:text-xl text-white font-semibold md:my-2 text-opacity-60'>{instructor.email}</p>
                                    <p className='flex justify-center text-white gap-2 mt-1 md:mt-3 text-xs md:text-xl'><FaFacebook /><FaLinkedin /><FaInstagram /></p></div>

                                )
                            }

                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Instructors;