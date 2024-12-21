import React from 'react'
import codeLogo from '../../Images/CodeLogo.jpg'
import deletLogo from '../../Images/DeleteLogo.png'
function GridLayout() {
  return (
    <>
        <div className="gridCard bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50">
       <div>
        <img className="w-[70px] " src={codeLogo} alt="" />
        <h3 className='text-[20px] w-[90%] line-clamp-1'>my fisrt project</h3>
       </div>
        <div className='flex items-center justify-between'>
          <p className='text-[14px] text-[gray]'>Created in </p>
          <img className='w-[30px]  cursor-pointer' src={deletLogo} alt="" />
        </div>
      </div>
    </>
  )
}

export default GridLayout