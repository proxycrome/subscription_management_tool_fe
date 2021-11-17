import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook,FaBars} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import flexpng from '../../Asset/flexpng.png'
import '../Mobilecard/Mobilecard.css'


function Mobilecard(){

    return(
        <div className="mobilecard-container">
                <div className="second-inner-mobilecard">
                <div className="inner-second-cardmobile">
                    <p>Account ID</p>
                    <p>20210801 </p>
                </div>
                <button>FUND WALLET</button>
                </div>
                <div className="third-inner-mobilecard">
                    <p>E-wallet Balance</p>
                    <p>NGN 134,457.56    </p>
                    </div>
                </div>
               
        
    )
}

export default Mobilecard