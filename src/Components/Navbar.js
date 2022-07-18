import React, { useState } from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import CustomLink from '../Shared/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';

const Navbar = () => {
  // Mobile icons state change.
  const [open, setOpen] = useState(false);

  // Create toggle fungtion.
  const handleOpen = () => setOpen(!open)

  const [user] = useAuthState(auth);


  return (
    <header className='bg-purple-200 w-full h-14 px-4 flex justify-between items-center'>

      {/* Logo section */}
      <h1 className='text-2xl font-bold cursor-pointer text-slate-500'>Firebase.</h1>

      {/* Desktop nav section */}
      <div className='hidden sm:flex space-x-4 font-semibold text-slate-500 cursor-pointer'>
        <CustomLink className='hover:text-blue-600 duration-300' to='/home'>Home</CustomLink>
        <CustomLink className='hover:text-blue-600 duration-300' to='/about'>About</CustomLink>
        <CustomLink className='hover:text-blue-600 duration-300' to='/blog'>Blog</CustomLink>
        <CustomLink className='hover:text-blue-600 duration-300' to='/dashboard'>Dashboard</CustomLink>
        {
          user ? <button className='text-white border bg-purple-500 py-1 px-2 rounded'>Sign Out</button> : <CustomLink className='hover:text-blue-600 duration-300' to='/login'>Login</CustomLink>
        }
        
      </div>

      {/* Mobile section icons */}

      <div onClick={handleOpen} className='cursor-pointer'>
        {
        (!open) ? <BiMenuAltLeft size={25}/> : <AiOutlineClose size={25}/>
        }
        
        {/* Mobile screen navbar */}
        <div className={(!open) ? 'hidden' : 'absolute top-14 left-0 flex flex-col bg-slate-500 h-full w-full text-center px-10 font-semibold'}>

        <CustomLink className='cursor-pointer text-purple-500 hover:text-red-400 duration-300' to='/home'>Home</CustomLink>
        <CustomLink className='cursor-pointer text-purple-500 hover:text-red-400 duration-300' to='/about'>About</CustomLink>
        <CustomLink className='cursor-pointer text-purple-500 hover:text-red-400 duration-300' to='/blog'>Blog</CustomLink>
        <CustomLink className='cursor-pointer text-purple-500 hover:text-red-400 duration-300' to='/dashboard'>Dashboard</CustomLink>
        <CustomLink className='cursor-pointer text-purple-500 hover:text-red-400 duration-300' to='/login'>Login</CustomLink>
        
      </div>
      </div>
    </header>
  )
}

export default Navbar