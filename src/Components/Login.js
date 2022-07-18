import {useState} from 'react'
import {BsGoogle,BsFacebook,BsGithub,BsTwitter} from 'react-icons/bs'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import auth from '../Firebase/Firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import ClockLoader from "react-spinners/ClockLoader";



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordBlur = (event) =>{
    setPassword(event.target.value)
  }


  // Handle Submit
  const handleOnSubmit = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(email,password)
    console.log('awesome')

    if(user){
      navigate(from, { replace: true });
    }
  }

  return (
    <section className='sm:w-5/12 px-4 mx-auto my-10'>

        <div className='flex flex-col justify-center items-center border rounded shadow shadow-orange-200 py-6 px-10'>
          <h1 className='text-2xl font-semibold text-purple-500 drop-shadow'>Please Login!</h1><br />

          <form onSubmit={handleOnSubmit}>
            <label className='text-md text-slate-500'>Email</label><br />
            <input onBlur={handleEmailBlur} className='border rounded outline-gray-400 w-full px-2 my-1 py-1' type="email" placeholder='Write your email' /><br />

            <label className='text-md text-slate-500'>Password</label><br />
            <input onBlur={handlePasswordBlur} className='border rounded outline-gray-400 w-full px-2 my-1 py-1' type="password" placeholder='Enter your password' required/>

            <input className='text-center w-full border rounded-full bg-purple-400 hover:bg-purple-500 font-semibold cursor-pointer duration-300 my-2 py-1 text-white' type="submit" value="Login" required/>


            <div className='flex justify-center'>
            <p className='text-red-400'>{error?.message}</p>

            {
              loading && <ClockLoader size={30}/>
            }
            </div>

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