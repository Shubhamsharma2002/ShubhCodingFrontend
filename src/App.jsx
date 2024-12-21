import React from 'react'
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import './App.css'
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import Editor from './Pages/Editor';

function App() {
 
 return(
      <>
      
      <BrowserRouter>
   
       <Routes>
       
        <Route path="/" element ={<HomePage />}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/editor/:projectId" element={<Editor/>}></Route>
         
        
       </Routes>
      
     
       </BrowserRouter>
        
      
      </>
 )
}

export default App
