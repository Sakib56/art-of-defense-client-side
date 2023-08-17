import React from 'react';

const SectionTitle = ({subHeading,Heading}) => {
    return (
        <div className='text-center lg:mb-10 max-w-md mx-auto'>
            <h2 className='text-secondary font-bold uppercase lg:text-2xl lg:mb-3 italic'> ---- {subHeading} ----</h2>
            <h1 className='text-xs lg:text-xl font-semibold italic text-white text-opacity-80 py-2 lg:py-4 border-y-4'>{Heading}</h1>
        </div>
    );
};

export default SectionTitle;