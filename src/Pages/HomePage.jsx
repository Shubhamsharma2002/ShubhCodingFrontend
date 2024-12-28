import React, { useEffect, useState } from 'react'
import Nav from '../Components/Navbar/Nav'
import Footer from '../Components/Footer/Footer'
import GridLayout from '../Components/Layouts/GridLayout'
import ListLayout from '../Components/Layouts/ListLayout'
import { useNavigate } from 'react-router-dom'
import { api_base_url } from '../Helper'

function HomePage() {
 
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);
  const [projTitle, setProjTitle] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const createProj = (e) => {
    if (projTitle === "") {
      alert("Please Enter Project Title");
    } else {
      fetch(api_base_url + "/project/createProject", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: projTitle,
          userId: localStorage.getItem("userId")
        })
      }).then(res => res.json()).then(data => {
        if (data.success) {
          setIsCreateModelShow(false);
          setProjTitle("");
          alert("Project Created Successfully");
          navigate(`/editor/${data.projectId}`);
        } else {
          alert("Something Went Wrong");
        }
      });
    }
  };

  const getALLProj = () => {
    fetch(api_base_url + "/project/getAllProjects", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId")
      })
    }).then(res => res.json()).then(data => {
      if (data.success) {
        console.log(data)
        setData(data.projects);
      } else {
        setError(data.message);
      }
    });
  };

  useEffect(() => {
    getALLProj();
  }, []);

  const [isGridLayout, setIsGridLayout] = useState(false);
  return (
    <>
    <Nav isGridLayout={isGridLayout} setIsGridLayout={setIsGridLayout}/>
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
          
          <button onClick={() => { setIsCreateModelShow(true) }} className='btnBlue rounded-[5px] mb-4 text-[20px] !p-[5px] !px-[10px]'>+</button>
        </div>
      </div>


      {/* project card layout */}
      <div className="cards">
        {
          isGridLayout?
            <div className='grid px-[100px]'>
                {
                  data?data.map((item,index) =>{
                     return <GridLayout key={index} item = {item}/>
                  }) :" "
                }
              
            </div>
            : <div className='list px-[100px]'>
                 
                 {
                  data?data.map((item,index) =>{
                     return <GridLayout key={index} item = {item}/>
                  }) :" "
                }
            </div>
        }


        
{isCreateModelShow &&
        <div className="createModelCon fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex items-center justify-center">
          <div className="createModel w-[25vw] h-[27vh] shadow-lg shadow-black/50 bg-[#141414] rounded-[10px] p-[20px]">
            <h3 className='text-2xl'>Create New Project</h3>
            <div className="inputBox !bg-[#202020] mt-4">
              <input
                onChange={(e) => { setProjTitle(e.target.value) }}
                value={projTitle}
                type="text"
                placeholder='Project Title'
              />
            </div>
            <div className='flex items-center gap-[10px] w-full mt-2'>
              <button   onClick={createProj} className='btnBlue rounded-[5px] w-[49%] mb-4 !p-[5px] !px-[10px] !py-[10px]'>Create</button>
              <button onClick={() => { setIsCreateModelShow(false) }} className='btnBlue !bg-[#1A1919] rounded-[5px] mb-4 w-[49%] !p-[5px] !px-[10px] !py-[10px]'>Cancel</button>
            </div>
          </div>
        </div>
      }
      </div>

    <Footer/>
    </>
  )
}

export default HomePage