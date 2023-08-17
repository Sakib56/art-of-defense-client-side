import React, { useEffect } from 'react';
import './AboutSchool.css'
import SectionTitle from '../../../Components/SectionTitle';
import img from '../../../assets/aboutSchoolimg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSchool = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100,
            easing: 'ease-in-out',
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <section className='bg-about-img bg-fixed max-w-7xl mx-auto p-7 lg:p-10 mb-5 md:mb-0'>
            <div className='mb-2 md:mb-5'>
                <SectionTitle Heading={"About Our School"} subHeading={'About School'}></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden'>
                <div data-aos-offset="200" data-aos="fade-right" data-aos-once="false">
                    <img className='rounded h-60 md:h-[400px] w-full lg:w-4/5' src={img} alt="" />
                </div>
                <div data-aos-offset="200" data-aos="fade-left" data-aos-once="false" className='flex justify-center ml-5 items-center'>
                    <div>
                        <h1 className='text-lg lg:text-5xl font-bold text-white font-mono'>ABOUT <span className='text-secondary'>FIGHT</span> SCHOOL</h1>
                        <p className='text-sm md:text-xl text-white font-serif font-semibold italic my-2 md:my-5'>Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
                        <p className='italic text-xs md:text-lg text-white text-opacity-80'>We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools, we do not require you to sign long term contracts. You just pay one low monthly fee for your martial arts and self defense classes at the beginning of each month</p>
                        <h2 className='mt-2 md:mt-5 text-lg md:text-3xl text-red-600 font-bold'>Aiden Richards</h2>
                        <p className='italic text-[10px] md:text-base text-white text-opacity-80'> DIRECTOR / INSTRUCTOR</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSchool;