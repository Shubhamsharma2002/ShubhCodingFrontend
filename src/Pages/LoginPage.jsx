import React, { useState } from 'react'
import login from '../Images/login.jpg'
import logo from '../Images/Weblogo.png'
import { Link } from 'react-router-dom'
function LoginPage() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
  return (
    <>
    <h1 className='text-center mt-6 text-xl font-bold heading'>Welcome to The SHUBHCODING</h1>  
    <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%] ">
        <img className='w-[200px] ms-16' src={logo} alt="" />
        <form  className='w-full mt-[60px]' action="">
        <div className="inputBox">
          <input required  onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Email'/>
        </div>

        <div className="inputBox">
          <input required  onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder='Password'/>
        </div>

        <p className='text-[gray]'>Don't have an account <Link to="/signup" className='text-[#00AEEF]'>Signup</Link></p>

        <p className='text-red-500 text-[14px] my-2'></p>

        <button className="btnBlue w-full mt-[20px]">Login</button>
      </form>
        </div>
        <div className="right w-[55%] me-3">
             <img src={login} alt=""  width={'80%'} className='signupImg '/>
        </div>
      
    </div>

</>
  )
}

export default LoginPage