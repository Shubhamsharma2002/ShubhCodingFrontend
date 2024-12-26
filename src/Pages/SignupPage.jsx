import React, { useState } from 'react'
import signupImg from '../Images/Signupimg.jpg'
import logo from'../Images/Weblogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { api_base_url } from '../Helper.js'

function SignupPage() {
    const[username , setUserName] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const submitForm = (e) => {
      e.preventDefault();
      fetch(api_base_url + "/user/registaer",{
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          name: name,
          email: email,
          password: password
        })
      }).then((res)=>res.json()).then((data)=>{
        if(data.success === true){
          alert("Account created successfully");
          navigate("/login"); 
        }
        else{
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
            <form  onSubmit={submitForm} className='w-full mt-[60px]' >
            <div className="inputBox">
              <input required onChange={(e)=>{setUserName(e.target.value)}} value={username} type="text" placeholder='Username'/>
            </div>

            <div className="inputBox">
              <input required onChange={(e)=>{setName(e.target.value)}} value={name}  type="text" placeholder='Name'/>
            </div>

            <div className="inputBox">
              <input required  onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Email'/>
            </div>

            <div className="inputBox">
              <input required  onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder='Password'/>
            </div>

            <p className='text-[gray]'>Already have an account <Link to="/login" className='text-[#00AEEF]'>login</Link></p>

            <p className='text-red-500 text-[14px] my-2'>{error}</p>

            <button className="btnBlue w-full mt-[20px]">Sign Up</button>
          </form>
            </div>
            <div className="right w-[55%] me-3">
                 <img src={signupImg} alt=""  width={'90%'} className='signupImg animate-bounce'/>
            </div>
          
        </div>
    
    </>
  )
}

export default SignupPage