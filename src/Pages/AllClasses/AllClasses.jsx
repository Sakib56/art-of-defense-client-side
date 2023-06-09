import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AllClassesCard from './AllClassesCard';

const AllClasses = () => {
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
    // console.log(allClassesData)
    return (
        <div className='my-8 lg:my-14 max-w-7xl mx-auto'>
            <h1 className='text-center font-bold text-3xl my-10'>All classes</h1>
            {
                loading ? <> <div className='text-center mt-10'><ClipLoader
                    color="#36d7b7"
                    // loading={loading}
                    // cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> </div></> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            allClassesData.map(data => <AllClassesCard data={data} key={data._id}>
                            </AllClassesCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default AllClasses;