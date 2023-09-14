import React from 'react'
import './account.css'
import facebook from './facebook (1).png'
import google from './search.png'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className='flex items-center justify-center h-[100vh] p-72'>
                <div className='bg-[#b81d24] p-10 rounded-xl'>

                    <Link to='/'>
                        <p className='mb-5 text-[#f5f5f1] text-lg'><i className="fa-solid fa-arrow-left"></i></p>
                    </Link>


                    <div className='text-center text-[#f5f5f1] mb-10'>
                        <h1 className='font-bold text-3xl tracking-widest'>Login Form</h1>
                        <p >you can login for subscription</p>
                    </div>


                    <form action="" className='mb-10'>

                        <div className='rounded-md bg-[#f5f5f1] mb-5 w-[400px] p-2 flex items-center'>
                            <span className='text-[#b81d24] text-xl'><i className="fa-solid fa-user"></i></span>
                            <input className='py-2 px-3 text-xl w-full bg-transparent outline-none' placeholder='Email' type="text" />
                        </div>

                        <div className='rounded-md bg-[#f5f5f1] mb-2 w-[400px] p-2 flex items-center'>
                            <span className='text-[#b81d24] text-xl'><i className="fa-solid fa-lock"></i></span>
                            <input className='py-2 px-3 text-xl w-full bg-transparent outline-none' placeholder='Password' type="password" />
                        </div>

                        <div className='mb-5 text-[#f5f5f1] text-lg'>
                            <input type="checkbox" className='mr-1' />
                            <span>Remember?</span>
                        </div>

                        <button className='py-2 text-xl w-full rounded-md text-[#b81d24] bg-[#f5f5f1] hover:bg-[#e50914] hover:text-[#f5f5f1]'>Log In</button>

                    </form>

                    <div className='border-[1px] border-[#f5f5f1] w-[70%] mx-auto'></div>
                    <span className='flex justify-center text-[#f5f5f1] mb-8 '>or login with</span>

                    <div className='flex justify-center items-center'>
                        <img src={facebook} alt="" className='mr-5 cursor-pointer' />
                        <img src={google} alt="" className=' cursor-pointer' />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Login