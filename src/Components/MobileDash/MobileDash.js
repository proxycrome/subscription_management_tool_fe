import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook,FaBars} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../MobileDash/MobileDash.css'


function MobileDash(){
return(
   <div>
       <div>
       <div>
       <FaBars/>
       <div><img src={flexpng}/></div>
       </div>
       <div>
           <div>FaEye</div>
           <div>FaEye</div>
       </div>
       </div>
       <div>
       <div>FaEye</div>
       <p>Hi, Judith</p>
       </div>
      
   </div>
)



}
export default MobileDash