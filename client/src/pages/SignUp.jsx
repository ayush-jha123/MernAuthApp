import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(false);
  const [Loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
      setFormData({...formData,[e.target.id]:e.target.value})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    // add proxy at vite.config
    setError(false);
    setLoading(true);
    const res=await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data=await res.json();
    setLoading(false)
    if(data.success===false){
      setError(true);
    }
    navigate("/")
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button type="submit" className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{Loading?'Loading...':'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5' >
        <p>Have a account?</p>
        <Link to='/sign-in'>
        <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>
      <div>{error &&<span className="text-red-700 mt-5">Something went wrong !!</span> }</div>
    </div>
  )
}
