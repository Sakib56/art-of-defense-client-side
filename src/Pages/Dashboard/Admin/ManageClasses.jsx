import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageClasses = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const { isLoading, refetch, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allClasses')
            // console.log('res from data', res)
            return res.data
        }


    })
    const handleApproved = (id, status) => {
        console.log(id, status)
    }
    const handleDenied = (id, status) => {
        console.log(id, status)
    }
    const handleFeedback = async () => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })

        if (text) {
            Swal.fire(text)
            console.log(text)
        }
    }
    return (
        <div className='w-full mt-5 mb-20'>
            <h2 className='text-center font-bold text-3xl mb-5'>Manage All classes</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-lg'>
                                <th>Sl</th>
                                <th>class</th>
                                <th>InstructorName & email</th>
                                <th>Available seat</th>
                                <th>status</th>
                                <th>Action</th>
                                <th>FeedBack</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {/* row 1 */}
                            {
                                allClasses.map((classes, index) => <tr key={classes._id}>
                                    {console.log(classes)}
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={classes.class_img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{classes.name}</div>
                                                <div className="text-sm opacity-50">Price: ${classes.price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {classes.instructor} <br />
                                        {classes.instructor_email}
                                    </td>
                                    <td>
                                        {classes.available_seats}
                                    </td>
                                    <td>
                                        {classes.status}
                                    </td>
                                    <td>
                                        <div className='flex flex-col'>
                                            <button onClick={() => handleApproved(classes._id, 'approved')} disabled={classes.status == 'approved' || classes.status == 'denied'} className="btn btn-sm btn-accent">Approved</button> <br />
                                            <button onClick={() => handleDenied(classes._id, 'denied')} disabled={classes.status == 'approved' || classes.status == 'denied'} className='btn btn-sm -mt-5 btn-error'>Deny</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={handleFeedback} disabled={classes.status == 'approved' || classes.status == 'denied'} className='btn btn-success '>Send <br /> FeedBack</button>
                                    </td>

                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageClasses;