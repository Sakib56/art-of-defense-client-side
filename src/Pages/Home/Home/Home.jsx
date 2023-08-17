import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Blog from '../Blogs/Blogs';
import Testimonials from '../Testimonial/Testimonials';
import Program from '../Program/Program';
import AboutSchool from '../AboutSchool/AboutSchool';
import GetInTouch from '../GetInTouch/GetInTouch';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-[#1F2D48] to-[#1f3c48fd] text-white'>
           <Slider></Slider>
           <PopularClasses></PopularClasses>
           <Program></Program>
           <PopularInstructors></PopularInstructors>
           <AboutSchool></AboutSchool>
           <Blog></Blog>
           <Testimonials></Testimonials>
           <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;