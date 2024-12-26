import React, { useState } from 'react'
import codeLogo from '../../Images/CodeLogo.jpg'
import deletLogo from '../../Images/DeleteLogo.png'
import { api_base_url } from '../../Helper';
import { useNavigate } from 'react-router-dom';
function GridLayout({item}) {
  const navigate = useNavigate();
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);
  const deleteProj = (id) => {
      fetch(api_base_url + "/project/deleteProject",{
        mode: "cors",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          progId: id,
          userId: localStorage.getItem("userId")
        })
      }).then(res=>res.json()).then(data=>{
        if(data.success){
          setIsDeleteModelShow(false)
          window.location.reload()
        }else{
          alert(data.message)
          setIsDeleteModelShow(false)
        }
      })
    }
  return (
    <>
        <div className="gridCard bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50">
       <div onClick={()=>{navigate(`/editor/${item._id}`)}}>
        <img className="w-[70px] " src={codeLogo} alt="" />
        <h3 className='text-[20px] w-[90%] line-clamp-1'>{item.title}</h3>
       </div>
        <div className='flex items-center justify-between'>
          <p className='text-[14px] text-[gray]'>Created in {new Date(item.date).toDateString()} </p>
          <img className='w-[30px]  cursor-pointer' src={deletLogo} alt=""  onClick={()=>{setIsDeleteModelShow(true)}}/>
        </div>
      </div>

      {
        isDeleteModelShow ? <div className="model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col">
          <div className="mainModel w-[25vw] h-[25vh] bg-[#141414] rounded-lg p-[20px]">
            <h3 className='text-3xl'>Do you want to delete <br />
              this project</h3>
            <div className='flex w-full mt-5 items-center gap-[10px]'>
              <button onClick={()=>{deleteProj(item._id)}} className='p-[10px] rounded-lg bg-[#FF4343] text-white cursor-pointer min-w-[49%]'>Delete</button>
              <button onClick={()=>{setIsDeleteModelShow(false)}} className='p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]'>Cancel</button>
            </div>
          </div>
        </div> : ""
      }


    </>
  )
}

export default GridLayout