import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import Logo from "../../images/logo2.png"
import {GridViewRounded, GroupWorkRounded, PeopleRounded, Inventory2Rounded, ExitToAppRounded} from "@mui/icons-material"
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation().pathname;
  const [path, setPath] = useState("")
  // const [path, setPath] = useState("")

  useEffect(()=>{
    setPath(location);
   
  }, [location])

  const closeNav = () => {
    document.getElementById("sidebar").style.display = "none";
  }   

  const changePathAndClose = (path) => {
    if(window.innerWidth<=992){
       closeNav()
    }
    setPath(path);
  }

  return (
    <div className='sidebar'>
      <div className='links_container'>
        <div className='logo_container'>
          <img src={Logo} alt="logo"/>
        </div>
        <ul>
          <li className='link'>
            <Link to="/"
            className={path.includes("dashboard") || path==="dashboard"
            ?"selected"
            :""}
            onClick={()=>changePathAndClose("dashboard") }
            >
              <GridViewRounded/>
              Dashboard
            </Link>
          </li>
          <li className='link'>
            <Link to="/team" 
            className={path.includes("team") || path==="team"
            ?"selected"
            :""}
            onClick={()=>changePathAndClose("team") }>
              <GroupWorkRounded/>
              Team Members
            </Link>
          </li>
          <li className='link'>
            <Link to="/clients" 
            className={path.includes("clients") || path==="clients"
            ?"selected"
            :""}
            onClick={()=>changePathAndClose("clients") }>
              <PeopleRounded/>
              Clients
            </Link>
          </li>
          <li className='link'>
            <Link to="/products" 
            className={path.includes("products") || path==="products"
            ?"selected"
            :""}
            onClick={()=>changePathAndClose("products")}>
              <Inventory2Rounded/>
              Products
            </Link>
          </li>
        </ul>
      </div>
      
        <div>
          <div className='line_container'>
          </div>
          <div className='logout_container'>
            <Link to="/login">
          <ExitToAppRounded />
            <p>
              Logout
            </p></Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar