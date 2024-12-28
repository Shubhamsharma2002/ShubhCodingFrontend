import React from 'react'
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import './App.css'
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import EditorLayout from './Pages/Editor';


function App() {
     let isLoggedIn = localStorage.getItem("isLoggedIn");
 return(
      <>
      
      <BrowserRouter>
   
       <Routes>
       
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login"/>}></Route>
        <Route path="*" element={isLoggedIn ? <ErrorPage />: <Navigate to="/login"/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/editor/:projectId" element={isLoggedIn ? <EditorLayout /> : <Navigate to="/login"/>}></Route>

         
        
       </Routes>
      
     
       </BrowserRouter>
        
      
      </>
 )
}

export default App
