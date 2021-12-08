import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook,FaBars} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import flexpng from '../../Asset/flexpng.png'
import '../Mobilecard/Mobilecard.css'
import { customerdetails } from '../../redux/flex/flex.actions';


function Mobilecard(){
    let history=useHistory()
    let customerDetail=JSON.parse(localStorage.getItem('customerDetail'))

    return(
        <div className="mobilecard-container">
                <div className="second-inner-mobilecard">
                <div className="inner-second-cardmobile">
                    <p className="smallfont">Account ID</p>
                    <p className="bigfont">{customerDetail.userId} </p>
                </div>
                <button onClick={(()=>{history.push("/fundwallet")})}>FUND WALLET</button>
                </div>
                <div className="third-inner-mobilecard">
                    <p className="smallfont">E-wallet Balance</p>
                    <p className="bigfont">NGN 134,457.56    </p>
                    </div>
                </div>
               
        
    )
}

export default Mobilecard