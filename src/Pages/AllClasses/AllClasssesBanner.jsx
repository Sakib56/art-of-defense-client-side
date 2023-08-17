import React from 'react';
import img from '../../assets/allClassBanner.png'
const AllClassesBanner = () => {
    return (
        <div className='pt-14 md:pt-0 grid grid-cols-2 bg-black bg-opacity-30'>
            <div className='items-center flex'>
                <div className='ml-2 lg:ml-20'>
                    <h1 className='text-sm md:text-5xl bg-gradient-to-r from-red-800 to-red-400 font-semibold italic bg-clip-text text-transparent'>Here are all the Classes Information</h1>
                    <p className='lg:mt-5 text-[8px] md:text-lg italic text-white text-opacity-80'>We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools, we do not require you to sign long term contracts.</p>
                    <div className='mt-2'>
                    <button className='md:btn px-2 text-[8px] lg:text-base lg:px-8 lg:mt-5 bg-gradient-to-r from-[#941320] to-[#49072bbd] rounded-lg text-white border border-white border-opacity-50'><span className='text-white'>Get Start</span></button>
                    <button className='md:btn md:btn-outline px-2 ml-2 lg:px-8 lg:mt-5 rounded-lg text-[8px] lg:text-base  text-white'><span className='text-white'>Learn More</span></button>
                    </div>
                </div>
            </div>
            <div className=''>
                <img className='w-full h-[200px] md:h-[600px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default AllClassesBanner;