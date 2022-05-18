import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../../components/Dashboard/Dashboard'
import Topbar from '../../components/Topbar/Topbar'
import "./home.css"
import { Navigate } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Products from '../../components/Products/Products'
import Team from '../../components/Team/Team'
import Clients from '../../components/Clients/Clients'



function Home() {
  
  return (
    <div className='home'>
      <Sidebar />
      <div className='container'>
        <Topbar />
        <div className='main_display'>
          <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />}/>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/clients' element={<Clients />} />
              <Route path='/products' element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home