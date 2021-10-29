import React from 'react'
import '../Navbar/Navbar.css'
import { FaBars,FaTimes,FaAngleDown } from "react-icons/fa"; 
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';

import {useState} from 'react'
import {Link} from 'react-router-dom'


function Navbar(){
    const[mobilenavcontent, setMobilenavcontent]=useState({display:"none"})
    const[fastyle,setFastyle ]=useState({display:"none"})
    const[fabar,setFabar ]=useState({display:"inline"})
    const[extra,setExtra ]=useState({display:"none",color:"red"})

  const handleextra=()=>{

    if(extra.display==="none"){
        setExtra({display:"inline",})
    }
    else{  setExtra({display:"none"})}

   }
return(
    <div className='NavBar'>
        <div className="Nav">
            <div className="Navlogo">
              <FlexLogo className="laptop-logo" />
             
            </div>
            <div className="mobilenavrightbar">

                <p><FaBars style={fabar} onClick={()=>{setMobilenavcontent({display:"flex"});
                setFastyle({display:"flex"});setFabar({display:"none"})}} /></p><FaTimes style={fastyle} onClick={()=>{setMobilenavcontent({display:"none",});
                setFastyle({display:"none"});setFabar({display:"inline"})}}/>
            </div>
            
            <div className="NavRightContent">
                <div className="total-dropdown">
               <p className="links" id="companyLink"><p>Company</p><FaAngleDown 
               onClick={handleextra}/> </p>
             <div style={extra}>
                
                   <Link to="/about"  style={{textDecoration:"none"}}><p>Terms</p></Link>
                    <Link style={{textDecoration:"none"}}><p>Policy</p></Link>
                   
                   </div>
               </div>
               
             
               <Link className="links" to="/howworks"> <p>How it works</p></Link>
               <Link className="links" to="/blog" > <p>Blogs</p></Link>
               <Link className="links" to="/partners"><p>Partnership</p></Link>
                <button>CONTACT US</button>
            </div>
        </div>
        <div style={mobilenavcontent} className="mobilenavrightcontent">
                
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