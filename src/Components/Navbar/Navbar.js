import React from 'react'
import '../Navbar/Navbar.css'
import { FaBars,FaTimes,FaAngleDown } from "react-icons/fa"; 
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import { useHistory } from 'react-router-dom';

import {useState} from 'react'
import {Link} from 'react-router-dom'
import { headercolor } from '../../redux/flex/flex.actions'
import { connect } from 'react-redux'


function Navbar({headercolor,presentcolor,partstyle,blogstyle,howworks,privacystyle,compstyle,aboutstyle}){
    console.log(presentcolor.howcolor)
    const[mobilenavcontent, setMobilenavcontent]=useState({display:"none"})
    const[fastyle,setFastyle ]=useState({display:"none"})
    const[fabar,setFabar ]=useState({display:"inline"})
    const[extra,setExtra ]=useState({display:"none"})
    const[extramobile,setExtramobile ]=useState({display:"none"})
    const[part,setPart]=useState({color:presentcolor.partcolor})
    const[how,setHow]=useState({color:presentcolor.howcolor})
    const[blogy,setBlogy]=useState({color:presentcolor.color})
    const[company,setCompany]=useState({color:presentcolor.color})
    const history=useHistory()

  const handleextra=()=>{

    if(extra.display==="none"){
        setExtra({display:"inline",})
    }
    else{  setExtra({display:"none"})}

   }
   const handleextramobile=()=>{

    if(extramobile.display==="none"){
        setExtramobile({display:"inline",})
    }
    else{  setExtramobile({display:"none"})}

   }
   //<Link className="links" to="/howworks"style={howstyle}> <p>How it works</p></Link>
   //{textDecoration:"none",color:"#030640"}
   //<Link className="mobileLinks" to="/blog" id="blogColor"><p>Blogs</p></Link>
return(
    <div className='NavBar'>
        <div className="Nav">
            <div className="Navlogo" onClick={(()=>{history.push("/")})}>
              <FlexLogo className="laptop-logo" />
             
            </div>
            <div className="mobilenavrightbar">

                <p><FaBars style={fabar} onClick={()=>{setMobilenavcontent({display:"flex"});
                setFastyle({display:"flex"});setFabar({display:"none"})}} /></p><FaTimes style={fastyle} onClick={()=>{setMobilenavcontent({display:"none",});
                setFastyle({display:"none"});setFabar({display:"inline"})}}/>
            </div>
            
            <div className="NavRightContent">
                
              
               <div className="dropDown">
               <p id="companyLink"  style={compstyle}><p>Company</p><FaAngleDown 
               onClick={handleextra}/> 
               </p>
              <div style={extra}>
               <Link to="/company" style={aboutstyle}><p>About us</p></Link>
               <Link to="/about" style={privacystyle}><p>Privacy policy</p></Link>
               </div>
               </div>
               
             
               <p  style={howworks}  onClick={(()=>{history.push("/howworks")})}> How it works</p>
               <p  style={blogstyle} onClick={(()=>{history.push("/blog");})} >Blog</p>
               <div className="testing">
               <p  id="partyner"style={partstyle} onClick={(()=>{history.push("/partners");})} >Partnerships</p>
               </div>
                <button onClick={(()=>{history.push("/contact")})}>CONTACT US</button>
            </div>
        </div>
        <div style={mobilenavcontent} className="mobilenavrightcontent">
                <div className="mobileFlex-div">
                <p className="mobileFlex" style={compstyle}><p>Company</p><FaAngleDown 
               onClick={handleextramobile}/></p> 
               <div style={extramobile}>
               <Link to="/company" className="aboUt" style={aboutstyle}><p>About us</p></Link>
               <Link className="exception" id="prIVacy" to="/about" style={privacystyle}><p>Privacy policy</p></Link>
               </div>
               </div>
                <p style={howworks} onClick={(()=>{history.push("/howworks")})} className="exception">How it works</p>
                <Link className="mobileLinks" to="/blog" id="blogColor"><p>Blogs</p></Link>
                 <p style={partstyle}  onClick={(()=>{history.push("/partners")})} >Partnership</p>
                <button onClick={(()=>{history.push("/contact")})}>CONTACT US</button>
            </div>
    </div>
)

}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
 const mapstatetoprops=({flex:{presentcolor}})=>({
 
    presentcolor
   
   

})
export default connect (mapstatetoprops,MapDispatchToProps) (Navbar)