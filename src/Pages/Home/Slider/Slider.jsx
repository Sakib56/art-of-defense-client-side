import React, { useEffect } from 'react';
import img1 from '../../../assets/slider-1.jpg';
import img2 from '../../../assets/slider-2.jpg';
import img3 from '../../../assets/slider-3.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Slider = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
            easing: 'ease-in-out',
            once: false,
        });
        AOS.refresh();
    }, []);

    const sliderText = <>
        <h1 className='text-[10px] md:text-3xl lg:text-6xl font-semibold mb-0 md:mb-7 lg:mb-10 font-mono italic'>
            WELCOME TO <br />
            KARATE  AND MARTIAL <br />
            <span className='text-secondary text-opacity-90'> ARTS SCHOOL</span> <br />
        </h1>
        <p className='text-[7px] md:text-lg lg:text-xl lg:mb-5 text-white text-opacity-70'>EVERY GREAT JOURNEY STARTS <br /> WITH ONE STEP</p>
        <p className='text-[10px] md:text-lg text-secondary italic'>Train With Our Best legends</p>
        <button className='md:btn px-2 lg:px-8 lg:mt-5 bg-gradient-to-r from-[#941320] to-[#49072bbd] rounded-lg text-white border border-white border-opacity-50'><span className='text-white'>Get Start</span></button>
      
        
    </>

    return (

        <div className='w-full pt-16 lg:pt-20 overflow-hidden text-center'>
            <Carousel>
                <div className='overflow-hidden'>
                    <img className='max-h-[600px] opacity-60' src={img3} />
                    <div className="legend lg:mb-28">
                        <div data-aos-offset="200" data-aos="fade-right" data-aos-once="false" className='bg-transparent text-left text-opacity-80 opacity-100 '>
                            {sliderText}
                        </div>
                    </div>
                </div>
                <div>
                    <img className='max-h-[600px]' src={img1} />
                    <div className="legend lg:mb-28 flex justify-end">
                        <div className='bg-transparent opacity-100'>
                            <div data-aos-offset="200" data-aos="fade-left" data-aos-once="false" className='bg-transparent text-left text-white text-opacity-80 opacity-100 '>
                                {sliderText}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='max-h-[600px]' src={img2} />
                    <div className="legend lg:mb-28 flex justify-center">
                        <div data-aos-offset="200" data-aos="fade-right" data-aos-once="false" className='bg-transparent text-left text-white text-opacity-80 opacity-100 '>
                            {sliderText}
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>

    );
};

export default Slider;