import React, { use, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [login, setLogin] = useState(true)
  const phone = React.createRef<HTMLInputElement>()
  const name = React.createRef<HTMLInputElement>()
  const email = React.createRef<HTMLInputElement>()
  const router = useNavigate()
  const [error, setError] = useState('')
  const handleSubmit = ()=>{
  if(login){
    if(!phone.current?.value){
      setError("phone number required")
    }
    if(phone.current?.value){
      router('/')
    }
  }

  if(!phone.current?.value && !name.current?.value && !email.current?.value){
    setError("all fields are required")
  }
  if(phone.current?.value && name.current?.value && email.current?.value){
    router('/')
  }
}

  return (
    <div className="w-[500px]  m-auto mt-10 border border-1 h-[600px]  bg-slate-500 shadow-2xl
   text-white rounded-3xl p-10">
      <div className=' flex flex-col items-center justify-center gap-[20px] '>
      <span className='text-4xl'>{login ? "LogIn" : "SignUp"}</span>
 <div className='flex items-center gap-2'>
  <span>or</span>
  <button className='text-amber-800 cursor-pointer'
  onClick={() => setLogin(!login)}>
    {login ? "create an account" : "login to your account"}</button>
</div>

 <input ref={phone} 
 className='border  w-full p-3 rounded-2xl'
 type="text" placeholder='phone number' />
 
{!login && (
  <>
<input ref={name} className='border  w-full p-3 rounded-2xl'
 type="text" placeholder='name' />
<input ref={email} className='border  w-full p-3 rounded-2xl'
type="text" placeholder='email' /> 
</>
)}
{error && <span className='text-[#b21c1c]'>{error}</span>}
      </div>
      <button onClick={handleSubmit}
      className=' bg-amber-800 mt-10 mb-5 w-full p-3 rounded-2xl cursor-pointer' >
        Submit</button>
      <span >By creating an account, I accept the Terms & Conditions & Privacy Policy</span>
 {login && <img width={200} height={200} className='m-auto'
src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" 
alt="google" />}
    </div>
  )
}

export default LogIn