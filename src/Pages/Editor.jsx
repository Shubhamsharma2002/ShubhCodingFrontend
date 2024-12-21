import React from 'react'
import Editornav from '../Components/Navbar/Editornav'

function Editor() {
  return ( 
    <>
    <Editornav/>
    <div className="flex">
        <div className='left w-[50%]'>
        <div className="tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]">
        <div className="tabs flex items-center gap-2">
              <div  className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">HTML</div>
              <div className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">CSS</div>
              <div  className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">JavaScript</div>
            </div>
        </div>
        </div>
        <iframe
            id="iframe"
            className="w-[50%] min-h-[82vh] bg-[#fff] text-black"
            title="output"
          />
    </div>

    </>
  )
}

export default Editor