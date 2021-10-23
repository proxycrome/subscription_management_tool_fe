import React from 'react'
import '../Navbar/Navbar.css'
import { FaBars,FaTimes } from "react-icons/fa"; 
import {useState} from 'react'


function Navbar(){
    const[mobilenavcontent, setMobilenavcontent]=useState({display:"none"})
return(
    <div className='NavBar'>
        <div className="Nav">
            <div className="Navlogo">
                LOGO
            </div>
            <div className="mobilenavrightbar">

                <p><FaBars onClick={()=>{setMobilenavcontent({display:"flex"})}} /></p>
            </div>
            
            <div className="NavRightContent">
                <p>Company</p>
                <p>How it works</p>
                <p>Blogs</p>
                <p>Partnership</p>
                <button>Contact Us</button>
            </div>
        </div>
        <div style={mobilenavcontent} className="mobilenavrightcontent">
                <FaTimes onClick={()=>{setMobilenavcontent({display:"none",})}}/>
                <p>Company</p>
                <p>How it works</p>
                <p>Blogs</p>
                <p>Partnership</p>
                <button>Get Started</button>
            </div>
    </div>
)

}
export default Navbar