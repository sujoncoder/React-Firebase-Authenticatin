import React, { useState } from 'react'
import {BsGoogle,BsFacebook,BsGithub,BsTwitter} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../Firebase/Firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setError] = useState('')
  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (event) =>{
    setEmail(event.target.value)
  }

  const handlePassword = (event) =>{
    setPassword(event.target.value)
  }

  const handleConfirmPassword = (event) =>{
    setConfirmPassword(event.target.value)
  }

  // Handle submit form
  const handleOnSubmit = (event) => {
    event.preventDefault()

    if(password !== confirmPassword){
      setError('Opps password don,t match')
      return;
    }

    if(password.length <6){
      setError('Password at least six charector long')
      return;
    }

    if(user){
      navigate('/home')
    }
    createUserWithEmailAndPassword(email,password)
  }


  
  
  return (
    <section className='sm:w-5/12 mx-auto my-10 px-4'>

        <div className='flex flex-col justify-center items-center border rounded shadow shadow-orange-200 py-4 px-10'>
          <h1 className='text-2xl font-semibold text-pink-400 drop-shadow'>Please Register!</h1><br />

          <form onSubmit={handleOnSubmit}>
            <label className='text-md text-slate-500'>Email</label><br />
            <input onBlur={handleEmail} required className='border rounded outline-gray-400 w-full px-2 my-1 py-1' type="email" placeholder='Write your email'/><br />

            <label className='text-md text-slate-500'>Password</label><br />
            <input onBlur={handlePassword} required className='border rounded outline-gray-400 w-full px-2 my-1 py-1' type="password" placeholder='Enter your password' />

            <label className='text-md text-slate-500'>Confirm Password</label><br />
            <input onBlur={handleConfirmPassword} required className='border rounded outline-gray-400 w-full px-2 my-1 py-1' type="password" placeholder='Enter your confirm password' />

            <input className='text-center w-full border rounded-full bg-pink-400 hover:bg-pink-500 font-semibold cursor-pointer duration-300 my-2 py-1 text-white' type="submit" value="Register" />
          </form>

            <p className='text-red-400'>{errors}</p>

          <div>
          <div className='flex justify-between'>
            <p className='text-slate-500'>Already have an account!</p>

            <Link className='text-blue-400 hover:underline' to='/login'>Please Login.</Link>
          </div>

            <div className='flex justify-around py-4'>
              <BsGoogle className='text-slate-300 hover:text-slate-600 hover:scale-105 cursor-pointer duration-300' size={25}/>
              <BsFacebook className='text-slate-300 hover:text-slate-600 hover:scale-105 cursor-pointer duration-300' size={25}/>
              <BsGithub className='text-slate-300 hover:text-slate-600 hover:scale-105 cursor-pointer duration-300' size={25}/>
              <BsTwitter className='text-slate-300 hover:text-slate-600 hover:scale-105 cursor-pointer duration-300' size={25}/>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Register