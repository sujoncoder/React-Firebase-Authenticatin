import React from 'react'
import {BsGoogle,BsFacebook,BsGithub,BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='w-4/12 mx-auto my-10'>

        <div className='flex flex-col justify-center items-center border rounded shadow shadow-orange-200 py-6 px-10'>
          <h1 className='text-2xl font-semibold text-purple-500 drop-shadow'>Please Login!</h1><br />

          <form className=''>
            <label className='text-md text-slate-500'>Email</label><br />
            <input className='border rounded outline-gray-400 w-full px-2 my-2 py-1' type="email" placeholder='Write your email' /><br />

            <label className='text-md text-slate-500'>Password</label><br />
            <input className='border rounded outline-gray-400 w-full px-2 my-2 py-1' type="password" placeholder='Enter your password' />

            <input className='text-center w-full border rounded-full bg-purple-400 hover:bg-purple-500 font-semibold cursor-pointer duration-300 my-2 py-1 text-white' type="button" value="Login" />

            <Link to='/register'>
              <p className='text-center hover:underline text-blue-400'>Create an account!</p>
            </Link>

            <div className='flex justify-around py-4'>
              <BsGoogle className='text-slate-300 hover:text-slate-600 hover:scale-105 cursor-pointer duration-300' size={25}/>
              <BsFacebook className='text-slate-300 hover:text-slate-600 hover:scale-105 cursor-pointer duration-300' size={25}/>
              <BsGithub className='text-slate-300 hover:text-slate-600 hover:scale-105 cursor-pointer duration-300' size={25}/>
              <BsTwitter className='text-slate-300 hover:text-slate-600 hover:scale-105 cursor-pointer duration-300' size={25}/>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Login