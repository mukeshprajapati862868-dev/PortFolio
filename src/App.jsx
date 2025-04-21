// import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Project from './pages/Project';
import Footer from './components/Footer';


function App() {
   return (
    <>
     <BrowserRouter>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
