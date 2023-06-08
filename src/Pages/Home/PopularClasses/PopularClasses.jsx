import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import PopularClassesCard from './PopularClassesCard';

const PopularClasses = () => {
    const [classes] = useClasses()
    // console.log(classes)
    return (
        <div className='my-8 lg:my-20 max-w-6xl mx-auto'>
            <h1 className='text-4xl text-center font-bold'>Popular Classes</h1>
            <p className='text-center italic mt-2 lg:mb-7'>Join our martial art club and be healthy.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    classes.slice(0, 6).map(popularClass => <PopularClassesCard
                        key={popularClass._id}
                        popularClass={popularClass}
                    ></PopularClassesCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;