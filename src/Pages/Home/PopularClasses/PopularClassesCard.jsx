import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight, FaMoon, FaRegMoon, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularClassesCard = ({ popularClass }) => {
    // console.log(popularClass)
    const { class_img, name, price, student_admit_number } = popularClass
    useEffect(() => {
        AOS.init({
            duration: 700,
            delay: 100,
            easing: 'ease-in-out',
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <div data-aos-offset="200" data-aos="zoom-in-right" data-aos-once="false" className='md:p-5 shadow-2xl bg-primary bg-opacity-25 rounded-lg border overflow-hidden border-white border-opacity-50'>
            <div className=''>
                <img className='w-full lg:w-96 rounded-t-md h-40 lg:h-[200px] opacity-90 hover:opacity-70' src={class_img} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#0f1725] to-[#1f3048fd]  bg-opacity-60 hover:bg-primary py-2 rounded-b-md px-2'>

                <div className='flex justify-between items-center text-white italic'>
                    <div>
                        <p className='text-xs md:text-xl italic font-serif font-semibold text-white text-opacity-70'>{name}</p>
                        <p className='text-[10px] md:text-xl font-semibold md:my-2 text-white text-opacity-50'>Price: ${price}</p>
                    </div>
                    <div className='flex flex-col items-end'>
                        <p className='text-[7px] md:text-md flex italic font-serif font-semibold text-secondary'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <p className='text-xs md:text-2xl font-semibold md:my-2 text-secondary'><FaArrowRight /></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PopularClassesCard;