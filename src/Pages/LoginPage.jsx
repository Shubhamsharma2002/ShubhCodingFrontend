import React, { useState } from 'react'
import login from '../Images/login.jpg'
import logo from '../Images/Weblogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { api_base_url } from '../Helper.js'
function LoginPage() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const [error, setError] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/user/login",{
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => res.json()).then(data => {
      if(data.success === true){
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", data.userId)
        setTimeout(() => {
          window.location.href = "/"
        }, 200);
      } else {
        setError(data.message);
      }
    })
  }
  return (
    <>
    <h1 className='text-center mt-6 text-xl font-bold heading'>Welcome to The SHUBHCODING</h1>  
    <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%] ">
        <img className='w-[200px] ms-16' src={logo} alt="" />
        <form  className='w-full mt-[60px]' onClick={submitForm}>
        <div className="inputBox">
          <input required  onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Email'/>
        </div>

        <div className="inputBox">
          <input required  onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder='Password'/>
        </div>

        <p className='text-[gray]'>Don't have an account <Link to="/signup" className='text-[#00AEEF]'>Signup</Link></p>

        <p className='text-red-500 text-[14px] my-2'>{error}</p>
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