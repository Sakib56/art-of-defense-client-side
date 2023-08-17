import React from 'react';
import './GetInTouch.css'
import img from '../../../assets/getInTouch.jpg'
import SectionTitle from '../../../Components/SectionTitle';

const GetInTouch = () => {
    return (
       <section className='pb-10 lg:pb-20'>
         <div className='bg-get-img bg-fixed max-w-7xl mx-auto p-2 md:p-7 lg:p-10 mb-5 md:mb-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <img className='rounded h-60 md:h-[400px] w-full lg:w-4/5' src={img} alt="" />
                </div>
                <div className='flex justify-center ml-5 items-center'>
                    <div>
                        <h1 className='text-lg md:text-5xl font-semibold'>Get In <span className='text-secondary'>Touch</span></h1>
                        <p className='text-xs md:text-xl font-semibold italic mt-3 text-white text-opacity-70'>Want to get in touch? We'd love to hear you. Here's how you can reach us</p>
                        <form>
                            <div className='flex gap-5 mt-5'>
                                <input className='w-full p-3 rounded bg-black font-bold' placeholder='Name' type="text" name="" id="" />
                                <input className='w-full p-3 rounded bg-black font-bold' placeholder='Phone' type="number" name="" id="" />
                            </div>
                            <textarea className='mt-5 w-full bg-black p-5 rounded' placeholder='Your Message' name="" id="" cols="15" rows="5"></textarea>
                            <input type="submit" value="Send" className='bg-secondary px-5 md:px-10 text-xs md:text-lg py-2 md:py-3 mt-3 rounded font-bold'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </section>
    );
};

export default GetInTouch;