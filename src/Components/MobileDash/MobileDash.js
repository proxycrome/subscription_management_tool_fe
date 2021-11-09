import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook,FaBars} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import flexpng from '../../Asset/flexpng.png'


import '../MobileDash/MobileDash.css'


function MobileDash(){
return(
   <div className="mobileDashtotal">
       <div className="mobile-dash-header">
       <div className="mobile-dash-header-left">
       <FaBars/>
       <div className="mobile-dash-logo"><img src={flexpng}/></div>
       </div>
       <div className="mobile-dash-header-right">
           <div><FaEye/></div>
           <div><FaEye/></div>
       </div>
       </div>
       <div className="mobile-dash-lower">
       <div><FaEye/></div>
       <p>Hi, Judith</p>
       </div>
      
   </div>
)



}
export default MobileDash