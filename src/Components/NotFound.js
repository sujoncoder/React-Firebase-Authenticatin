import React from 'react'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleButton = () => {
    navigate('/home')
  }
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-4xl text-slate-300 '>opps!</h1>
        <p className='text-lg capitalize text-slate-600 py-4'>page not found</p>
        <h1 className='text-9xl font-bold text-slate-400'>404</h1><br />

        <button onClick={handleButton} className='border py-1 px-4 bg-blue-200 hover:bg-blue-400 font-semibold duration-300 rounded hover:text-white shadow'>Back To Home</button>
    </section>
  )
}

export default NotFound