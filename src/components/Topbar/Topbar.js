import React from 'react'
import { NotificationsNone, Settings} from '@mui/icons-material';
import "./topbar.css"
import Profile from "../../images/profile.png"

function Topbar() {
  
  // const [showNav, setShowNav] = useState(true);
  // const openNav = () => {
  //   document.getElementById("sidebar").style.display = "flex";
  // }
  // const closeNav = () => {
  //   document.getElementById("sidebar").style.display = "none";
  // } 
  // const toggleNav = () =>{
  //   if(showNav){
  //     setShowNav(false)
  //     closeNav()
  //   }else{
  //     openNav()
  //     setShowNav(true)
  //   }
  // }
  //   console.log(showNav)
  // }
  // useEffect(() => {
  //   setShowNav("")
  // }, [])
  

  return (
    <div className='topbar'>
        <div className='logo_container' > {/* onClick={toggleNav} */}
        </div> 
        <div className='icon_container'>
          <div>
            
            <NotificationsNone/>
          </div>
          <div>
            <Settings/>
          </div>
          <div className='profile_image_container'>
            <img src= {Profile} alt="profile"/>
          </div>
        </div>

    </div>
  )
}

export default Topbar