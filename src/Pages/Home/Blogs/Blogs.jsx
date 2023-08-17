import React, { useEffect } from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const Blog = () => {
    return (
        <div className='lg:py-20 max-w-7xl mx-auto overflow-hidden'>
            <div className='text-center mb-7'>
                <SectionTitle subHeading={"News & blog "} Heading={"Join our martial art club and be healthy."}></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 lg:p-0'>
                <div className='shadow-xl p-5 bg-primary bg-opacity-50 rounded-lg'>
                    <img className='w-full h-36 md:h-44 opacity-75 rounded-lg' src="https://i.ibb.co/LPSggMm/blog1.jpg" alt="" />
                    <p className='mt-2 text-sm md:text-base text-justify italic'>Martial arts is not just about physical combat skills; it is a way of life that instills discipline, focus, and self-control. In this blog post, we delve into the transformative power of martial arts and how it helps ....</p>
                    <button className='bg-gradient-to-r from-[#941320] to-[#49072bbd] rounded px-5 py-1 mt-2 text-white italic'>Read More ...</button>
                </div>
                <div className='shadow-xl p-5 rounded-lg bg-primary bg-opacity-50'>
                    <img className='w-full h-44 opacity-75 rounded-lg ' src="https://i.ibb.co/12vwR2m/blog2.jpg" alt="" />
                    <p className='mt-2 text-justify italic'> Martial arts have a rich history that spans thousands of years. From ancient combat techniques to modern self-defense systems, the evolution of martial arts is a fascinating journey arts is a fascinating journey....</p>
                    <button className='bg-gradient-to-r from-[#941320] to-[#49072bbd] rounded px-5 py-1 mt-2 text-white italic'>Read More ...</button>
                </div>
                <div className='shadow-xl p-5 rounded-lg bg-primary bg-opacity-50'>
                    <img className='w-full h-44 opacity-75 rounded-lg' src="https://i.ibb.co/YDmKbFF/blog3.jpg" alt="" />
                    <p className='mt-2 text-justify italic'>The Benefits of Martial Arts Training for Children and Teens"Excerpt: Martial arts training offers numerous benefits for children and teenagers, extending far beyond physical fitness. In this blog post,  ....</p>
                    <button className='bg-gradient-to-r from-[#941320] to-[#49072bbd] rounded px-5 py-1 mt-2 text-white italic'>Read More ...</button>
                </div>
                <div className='shadow-xl p-5 rounded-lg bg-primary bg-opacity-50'>
                    <img className='w-full h-44 opacity-75 rounded-lg' src="https://i.ibb.co/74J6LVr/blog4.jpg" alt="" />
                    <p className='mt-2 text-justify italic'>Mixed Martial Arts (MMA) has become one of the fastest-growing sports in the world, captivating audiences with its intense action and skilled athletes. In this blog post, we take you inside the octagon and...</p>
                    <button className='bg-gradient-to-r from-[#941320] to-[#49072bbd] rounded px-5 py-1 mt-2 text-white italic'>Read More ...</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;