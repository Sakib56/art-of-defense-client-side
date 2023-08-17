import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialText from './TestimonialText';
import SectionTitle from '../../../Components/SectionTitle';

const Testimonials = () => {
    return (
        <div className='py-8 lg:py-20'>
            <div className='mb-5'>
                <SectionTitle Heading={"What Our Clients Say"} subHeading={'TESTIMONIALS'}></SectionTitle>
            </div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <TestimonialText details={"As I reflect on my martial arts journey, I am filled with gratitude. I've gained not only the ability to defend myself but also a sense of empowerment that extends far beyond the physical. Martial arts have taught me to respect my body, control my mind, and navigate life's challenges with unwavering determination"} name={'Robert Johnson'} img={'https://randomuser.me/api/portraits/men/78.jpg'}></TestimonialText>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialText details={"As I reflect on my martial arts journey, I am filled with gratitude. I've gained not only the ability to defend myself but also a sense of empowerment that extends far beyond the physical. Martial arts have taught me to respect my body, control my mind, and navigate life's challenges with unwavering determination"} name={'Mj Johnson'} img={'https://randomuser.me/api/portraits/men/62.jpg'}></TestimonialText>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialText details={"As I reflect on my martial arts journey, I am filled with gratitude. I've gained not only the ability to defend myself but also a sense of empowerment that extends far beyond the physical. Martial arts have taught me to respect my body, control my mind, and navigate life's challenges with unwavering determination"} name={'John Smith'} img={'https://randomuser.me/api/portraits/men/54.jpg'}></TestimonialText>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Testimonials;