import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const TestimonialText = ({ details, name, img }) => {
    return (
        <div className='mx-5 lg:mx-24 text-center flex flex-col items-center bg-black bg-opacity-30 rounded-xl p-5'>
            <img className='rounded-full w-24' src={img} alt="" />
            <h1 className='text-2xl mt-2 text-center font-serif font-semibold text-secondary'>{name}</h1>
            <p className='lg:block mt-5 text-xs lg:text-lg italic text-white text-opacity-60'>{details}</p>
            <Rating className='mt-2 opacity-75' style={{ maxWidth: 150 }} value={5} readOnly />
            
            <p className='text-2xl lg:text-5xl my-3 text-orange-500 text-opacity-75'><FaQuoteLeft /></p>
        </div>
    );
};

export default TestimonialText;