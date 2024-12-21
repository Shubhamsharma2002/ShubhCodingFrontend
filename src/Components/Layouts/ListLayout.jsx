import React from 'react'
import codeLogo from '../../Images/CodeLogo.jpg'
import deletLogo from '../../Images/DeleteLogo.png'
function ListLayout() {
  return (
    <>
     <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020]">
         <div className='flex items-center gap-2'>
            <img src={codeLogo} alt="" className='w-[80px]'/>
            <div>
            <h3 className='text-[20px]'>my Projects</h3>
            <p className='text-[gray] text-[14px]'>Created in</p>
          </div>
         </div>
         <div>
         {/* onClick={()=>{setIsDeleteModelShow(true)}} */}
          <img  className='w-[30px] cursor-pointer mr-4' src={deletLogo} alt="" />
        </div>
     </div>
     
    </>
  )
}

export default ListLayout