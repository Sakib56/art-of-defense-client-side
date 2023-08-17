import React, { useRef, useState } from 'react';
import './Program.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle';
import img1 from '../../../assets/programimg.jpg'
import img2 from '../../../assets/programimg2.jpg'
import img3 from '../../../assets/programimg3.jpg'
import img4 from '../../../assets/programimg4.jpg'
import img5 from '../../../assets/programimg5.jpg'

const Program = () => {
    return (
        <section className='bg-img bg-fixed max-w-7xl mx-auto p-7 lg:p-10'>
            <div className='mb-2 md:mb-5'>
                <SectionTitle Heading={"About Our program"} subHeading={'PROGRAMS'}></SectionTitle>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                freeMode={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <img className='hover:opacity-75' src={img1} alt="" />
                        <div className='bg-black bg-opacity-50 text-center p-5'>
                            <h1 className='text-lg md:text-2xl font-serif'>Kids Karate Groups</h1>
                            <p className='text-[10px] md:text-base text-secondary'>9.00-10.00AM</p>
                            <p className='text-[10px] md:text-base text-white italic text-opacity-75'>Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket, tri-tip pork chicken.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='hover:opacity-75' src={img2} alt="" />
                        <div className='bg-black bg-opacity-50 text-center p-5'>
                            <h1 className='text-lg md:text-2xl font-serif'>Kids Karate Groups</h1>
                            <p className='text-[10px] md:text-base text-secondary'>9.00-10.00AM</p>
                            <p className='text-[10px] md:text-base text-white italic text-opacity-75'>Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket, tri-tip pork chicken.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='hover:opacity-75' src={img3} alt="" />
                        <div className='bg-black bg-opacity-50 text-center p-5'>
                            <h1 className='text-lg md:text-2xl font-serif'>Kids Karate Groups</h1>
                            <p className='text-[10px] md:text-base text-secondary'>9.00-10.00AM</p>
                            <p className='text-[10px] md:text-base text-white italic text-opacity-75'>Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket, tri-tip pork chicken.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='hover:opacity-75' src={img1} alt="" />
                        <div className='bg-black bg-opacity-50 text-center p-5'>
                            <h1 className='text-lg md:text-2xl font-serif'>Kids Karate Groups</h1>
                            <p className='text-[10px] md:text-base text-secondary'>9.00-10.00AM</p>
                            <p className='text-[10px] md:text-base text-white italic text-opacity-75'>Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket, tri-tip pork chicken.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='hover:opacity-75' src={img2} alt="" />
                        <div className='bg-black bg-opacity-50 text-center p-5'>
                            <h1 className='text-lg md:text-2xl font-serif'>Kids Karate Groups</h1>
                            <p className='text-[10px] md:text-base text-secondary'>9.00-10.00AM</p>
                            <p className='text-[10px] md:text-base text-white italic text-opacity-75'>Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket, tri-tip pork chicken.</p>
                        </div>
                    </div>
                </SwiperSlide>
               
               
               
                


            </Swiper>
        </section>
    );
};

export default Program;