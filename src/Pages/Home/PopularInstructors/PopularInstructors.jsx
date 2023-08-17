import React, { useEffect, useState } from 'react';
import useClasses from '../../../Hooks/useClasses';
import PopularInstructorsCard from './PopularInstructorsCard';
import axios from 'axios';
import SectionTitle from '../../../Components/SectionTitle';

const PopularInstructors = () => {
    // const [classes] = useClasses()
    // console.log(classes);
    const [popularInstructor, setPopularInstructor] = useState([])
    useEffect(() => {
        axios.get('https://art-of-defense-server-side-sakib56.vercel.app/popularClasses')
            .then(res => {
                const result = res.data.filter(dt => dt.status == 'approved')
                setPopularInstructor(result)
            })
            .catch(error => console.error())
    }, [])
    return (
        <div className='my-8 lg:my-20 max-w-6xl mx-auto'>
            <div className='mb-5'>
                <SectionTitle subHeading={"Popular Instructors"} Heading={"Join our martial art club and be healthy."}></SectionTitle>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 p-3 lg:p-0'>
                {
                    popularInstructor.slice(0, 6).map(PopularInstructors => <PopularInstructorsCard
                        key={PopularInstructors._id}
                        PopularInstructors={PopularInstructors}
                    ></PopularInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;