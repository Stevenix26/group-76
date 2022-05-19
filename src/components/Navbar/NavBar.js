import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import Logo from "../../images/logo2.png"


function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo_container'>
        <img src={Logo} alt="logo"/>
      </div>
      <div>
        <div className='button_container'>
          <Link to="/signup">
            <button className='regbtn'>
              Register
            </button>
          </Link>

          <Link to = "/login">
            <button>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar