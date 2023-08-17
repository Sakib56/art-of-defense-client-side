import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularInstructorsCard = ({ PopularInstructors }) => {
    // console.log(PopularInstructors)
    const { instructor, instructor_img, student_admit_number } = PopularInstructors
    useEffect(() => {
        AOS.init({
            duration: 700,
            delay: 150,
            easing: 'ease-in-out',
            once: false,
        });
        AOS.refresh();
    }, []);
    return (

        <div data-aos-offset="200" data-aos="fade-up-right" data-aos-once="false" className='shadow-xl p-3 md:p-7 bg-primary bg-opacity-20 rounded-lg text-center border border-white hover:bg-primary hover:bg-opacity-50 overflow-hidden'>
            <img className='w-20 md:w-32 h-20 md:h-32 rounded-full mx-auto' src={instructor_img} alt="" />
            <p className='text-xs md:text-2xl text-white text-opacity-70 italic font-serif font-bold md:mt-3 text-center'>{instructor}</p>
            <p className='text-[10px] md:text-xl text-white font-semibold md:my-2 text-opacity-60'>Students :  {student_admit_number}</p>
            
            <p className='flex justify-center text-white gap-2 mt-1 md:mt-3 text-xs md:text-xl'><FaFacebook /><FaLinkedin /><FaInstagram/></p></div>

    );
};

export default PopularInstructorsCard;