import React, { useState } from 'react'
import Nav from '../Components/Navbar/Nav'
import Footer from '../Components/Footer/Footer'
import GridLayout from '../Components/Layouts/GridLayout'
import ListLayout from '../Components/Layouts/ListLayout'

function HomePage() {
  const [isGridlayout , setgridLayout] = useState(false)
  return (
    <>
    <Nav/>
    <div className='flex items-center justify-between px-[100px] my-[40px]'>
        <h2 className='text-2xl'>Hi, Shubham 👋</h2>
        <div className='flex items-center gap-1'>
          {/* Search Bar */}
          <div className="inputBox !w-[350px]">
            <input
              type="text"
              placeholder='Search Here... !'
              // value={searchQuery} // Bind search input to searchQuery state
              // onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
            />
          </div>
          {/* onClick={() => { setIsCreateModelShow(true) }} */}
          <button  className='btnBlue rounded-[5px] mb-4 text-[20px] !p-[5px] !px-[10px]'>+</button>
        </div>
      </div>


      {/* project card layout */}
      <div className="cards">
        {
          isGridlayout ?
            <div className='grid px-[100px]'>
              <GridLayout/>
              <GridLayout/>
              <GridLayout/>
              <GridLayout/>
              <GridLayout/>
              
            </div>
            : <div className='list px-[100px]'>
                 
                 <ListLayout/>
                 <ListLayout/>
                 <ListLayout/>
                 <ListLayout/>
                 <ListLayout/>
            </div>
        }
      </div>

    <Footer/>
    </>
  )
}

export default HomePage