import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade, Slide } from "react-awesome-reveal";


const AllClassesCard = ({ classes, role }) => {
    const { user } = useContext(AuthContext)
    // console.log(role)

    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const { class_img, instructor, name, available_seats, price, _id, student_admit_number } = classes
    const handleClassSelect = (data) => {
        if (!user) {
            Swal.fire({
                title: 'If you select this class please login!',
                text: '',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return navigate('/login')
        }
        else {
            const selectClasses = { class_img: data.class_img, instructor: data.instructor, name: data.name, available_seats: data.available_seats, price: data.price, email: user?.email, student_admit_number: student_admit_number }

            fetch('https://art-of-defense-server-side-sakib56.vercel.app/studentSelectClasses', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClasses)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(selectClasses)
                    console.log(data)
                    setShow(true)
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'class selected successfully !',
                            text: '',
                            icon: 'success',
                            confirmButtonText: 'ok'
                        })
                    }
                })

        }
    }
    return (

        <>
            <Fade>
                <div className={`shadow-2xl bg-black bg-opacity-10 p-2 lg:p-10 rounded ${available_seats <= 0 ? 'bg-red-400' : ''}`}>
                    <img className='w-full h-36 md:h-60 rounded-lg' src={class_img} alt="" />
                    <p className='text-base md:text-xl font-bold italic mt-3 text-secondary'>{name}</p>
                    <p className='text-xs md:text-lg font-semibold italic text-white text-opacity-80'>Instructor name : {instructor}</p>

                    <div className='flex justify-between items-end md:mt-5'>
                        <div className='text-[10px] md:text-lg font-semibold italic text-white text-opacity-75'>
                            <p>Price: ${price}</p>
                            <p>Available seats:{available_seats}</p>
                        </div>
                        <button disabled={role == 'admin' || role == 'instructor'} onClick={() => handleClassSelect(classes)} className={`${available_seats <= 0 || show ? 'btn-disabled' : 'bg-gradient-to-r from-[#941320] to-[#49072bbd]'} text-[10px] md:text-base font-semibold px-1 md:px-3 rounded md:py-2`}>Select class</button>

                    </div>
                </div>
            </Fade>
        </>

    );
};

export default AllClassesCard;