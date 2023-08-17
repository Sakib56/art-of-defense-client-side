import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleLoginImg from '../../assets/google.png'
import img from '../../assets/programimg3.jpg'
import { set, useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaBeer, FaEye, FaEyeSlash, FaFillDrip, FaRegEye } from 'react-icons/fa';
import Swal from 'sweetalert2';



const SignUp = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(true)
    const [error, setError] = useState('')
    const { createUser, googleLogin, logoutUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirm_password) {
            return setError('password and confirm password not match')
        }
        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const savedUser = { name: data.name, photo: data.photoUrl, email: data.email, role: 'student' }
                        fetch('https://art-of-defense-server-side-sakib56.vercel.app/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    navigate('/login', { replace: true })
                                    Swal.fire({
                                        title: 'SignUp successfully !',
                                        text: 'Please login',
                                        icon: 'success',
                                        confirmButtonText: 'ok'
                                    })
                                }
                            })

                        logoutUser()
                            .then(() => { })
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const savedUser = { name: loggedUser.displayName, photo: loggedUser.photoURL, email: loggedUser.email, role: 'student' }
                fetch('https://art-of-defense-server-side-sakib56.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate('/')
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <section className='bg-gradient-to-r from-[#1F2D48] to-[#1f3c48fd] text-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-20 md:py-24 px-3 md:px-0'>
                    <div className='flex items-center'>
                        <img className='hidden md:block w-3/4 lg:w-full md:h-[400px] mx-auto' src={img} alt="" />
                    </div>
                    <div className='border rounded-xl mx-auto w-full md:w-3/4 p-5'>
                        <h1 className='text-lg md:text-3xl font-bold text-center text-secondary'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='p-0 md:p-3'>
                            <div className='form-control'>
                                <label>
                                    <p className='text-base md:text-lg font-semibold md:mb-3'>Name</p>
                                </label>
                                <input className="input h-8 md:h-12  text-primary input-bordered w-full" type="text" {...register("name", { required: true })} placeholder='Enter your name' name="name" />
                                {errors.name && <p className='text-sm text-red-600 mt-2'>This name is required</p>}
                            </div>
                            <div className='form-control'>
                                <label>
                                    <p className='text-base md:text-lg font-semibold mb-1 mt-3'>Photo Url</p>
                                </label>
                                <input className="input h-8 md:h-12  text-primary input-bordered w-full" type="url" {...register("photoUrl", { required: true })} placeholder='Enter your photo url' name="photoUrl" />
                                {errors.photoUrl && <p className='text-sm text-red-600 mt-2'>Photo Url is required</p>}

                            </div>
                            <div className='form-control'>
                                <label>
                                    <p className='text-base md:text-lg font-semibold mb-1 mt-3'>Email</p>
                                </label>
                                <input className="input h-8 md:h-12  text-primary input-bordered w-full" type="email" {...register("email", { required: true })} placeholder='Enter your email' name="email" />
                                {errors.email && <p className='text-sm text-red-600 mt-2'>email is required</p>}
                            </div>
                            <div className='form-control relative'>
                                <label>
                                    <p className='text-base md:text-lg font-semibold mb-1 mt-3'>Password</p>
                                </label>
                                <input {...register("password", {
                                    required: true, minLength: 6, pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/

                                })} className="input h-8 md:h-12  text-primary input-bordered w-full" type={showPassword ? 'password' : 'text'} placeholder='Enter your password' name="password" />
                                <div onClick={() => setShowPassword(!showPassword)} className='absolute top-14 right-5 cursor-pointer'>
                                    {
                                        showPassword ? <FaRegEye className='text-xl'></FaRegEye> : <FaEyeSlash className='text-xl'></FaEyeSlash>
                                    }
                                </div>
                                {errors.password?.type === 'required' && <p className='text-sm text-red-600 mt-2'>password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-sm text-red-600 mt-2'>password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-sm text-red-600 mt-2'>password must have one Capital letter and one special character</p>}
                            </div>
                            <div className='form-control relative'>
                                <label>
                                    <p className='text-base md:text-lg font-semibold mb-1 mt-3'>Confirm Password</p>
                                </label>
                                <input {...register("confirm_password", {
                                    required: true
                                })} className="input h-8 md:h-12  text-primary input-bordered w-full" type={showPassword ? 'password' : 'text'} placeholder='Enter your password' name="confirm_password" />
                                <div onClick={() => setShowPassword(!showPassword)} className='absolute top-14 right-5 cursor-pointer'>
                                    {
                                        showPassword ? <FaRegEye className='text-xl'></FaRegEye> : <FaEyeSlash className='text-xl'></FaEyeSlash>
                                    }
                                </div>
                                {errors.password?.type === 'required' && <p className='text-sm text-red-600 mt-2'>confirm password is required</p>}

                            </div>
                            <p className='text-red-400 mt-3'>{error}</p>
                            <input type="submit" className='w-full bg-secondary rounded-lg mt-5 py-2 text-base md:text-xl text-white font-bold cursor-pointer' value="Sign Up" />
                            <h1 className='text-center text-sm md:text-lg mt-5'>Already have an account ? <Link to='/login'><span className='link text-secondary'>Login</span></Link></h1>
                        </form>
                        <div onClick={handleGoogleLogin} className='md:px-8 cursor-pointer'>
                            <button className='flex items-center justify-center gap-4 btn btn-outline border text-secondary border-pink-600 w-full hover:bg-secondary hover:border-0 text-sm mg:text-base'>sign up With Google <img className='w-12 h-12 p-2' src={googleLoginImg} alt="" /></button>
                        </div>
                    </div>
                </div >
            </div >
        </section>
    );
};

export default SignUp;