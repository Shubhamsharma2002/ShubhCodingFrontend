import React from 'react'
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import './App.css'
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';

function App() {
 
 return(
      <>
      
      <BrowserRouter>
       <Nav/>
       <Routes>
       
        <Route path="/" element ={<HomePage />}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        
       </Routes>
      
       <Footer/>
       </BrowserRouter>
        
      
      </>
 )
}

export default App
