import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Box/Box.css'

function Box({icon,name}){
    return(
        <div className="boX">
            <div><img src={icon}/></div>
            <div>{name}</div>
        </div>

    )
}

export default Box