import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
    const [allClassesData, setAllClassesData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('http://localhost:5000/allClasses')
            .then(res => {
                // console.log(res.data)
                setAllClassesData(res.data)
                setLoading(false)
            })
            .catch(error => console.error())
    }, [])
    console.log(allClassesData)
    return (
        <div className='w-full my-20'>
            <h2 className='text-center font-bold text-3xl'>Manage All classes</h2>
        </div>
    );
};

export default ManageClasses;