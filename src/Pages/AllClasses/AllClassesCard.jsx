import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllClassesCard = ({ data }) => {
    const { user } = useContext(AuthContext)
    console.log(data)
    const navigate = useNavigate()
    const { class_img, instructor, name, available_seats, price, _id } = data
    const handleClassSelect = () => {
        if (!user) {
            Swal.fire({
                title: 'If you select this class please login!',
                text: '',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return navigate('/login')
        }

    }
    return (
        <div className={`shadow-2xl p-10 rounded ${available_seats <= 0 ? 'bg-red-400' : ''}`}>
            <img className='w-full h-60 rounded-lg' src={class_img} alt="" />
            <p className='text-xl font-bold'>{name}</p>
            <p className='text-xl font-semibold mt-3'>Instructor name : {instructor}</p>

            <div className='flex justify-between items-end mt-5'>
                <div className='text-lg font-semibold'>
                    <p>Price: ${price}</p>
                    <p>Available seats:{available_seats}</p>
                </div>
                <button onClick={handleClassSelect} className={`${available_seats <= 0 ? 'btn-disabled' : 'btn-primary'} font-bold px-3 rounded py-2`}>Select class</button>

            </div>
        </div>
    );
};

export default AllClassesCard;