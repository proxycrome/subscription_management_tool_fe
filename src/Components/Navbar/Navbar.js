import React from 'react'
import '../Navbar/Navbar.css'
import { FaBars,FaTimes } from "react-icons/fa"; 
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {useState} from 'react'
import {Link} from 'react-router-dom'


function Navbar(){
    const[mobilenavcontent, setMobilenavcontent]=useState({display:"none"})
return(
    <div className='NavBar'>
        <div className="Nav">
            <div className="Navlogo">
              <FlexLogo className="laptop-logo" />
             
            </div>
            <div className="mobilenavrightbar">

                <p><FaBars onClick={()=>{setMobilenavcontent({display:"flex"})}} /></p>
            </div>
            
            <div className="NavRightContent">
               <Link className="links" to="/company"> <p>Company</p></Link>
               <Link className="links" to="/howworks"> <p>How it works</p></Link>
               <Link className="links" to="/blog" > <p>Blogs</p></Link>
               <Link className="links" to="/partners"><p>Partnership</p></Link>
                <button>CONTACT US</button>
            </div>
        </div>
        <div style={mobilenavcontent} className="mobilenavrightcontent">
                <FaTimes onClick={()=>{setMobilenavcontent({display:"none",})}}/>
                <p>Company</p>
                <p>How it works</p>
                <p>Blogs</p>
                <p>Partnership</p>
                <button>Contact us</button>
            </div>
    </div>
)

}
export default Navbar