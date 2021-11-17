import React from 'react'
import {FaEye,FaEyeSlash,FaFacebookF,FaInfo} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../../redux/flex/flex.actions';
import { signupdetails } from '../../redux/flex/flex.actions';
import { useHistory } from 'react-router-dom';
import {ReactComponent as FacebookLogo} from '../../Asset/FACEBOOK ICON.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {ReactComponent as SignflexLogo} from '../../Asset/LOGO FLEX.svg';
import '../../Components/Resetpassframecancel/Resetpassframecancel.css'
import axios from 'axios'


function Resetpassframe({children}){
    return(
        <div className="signintotal">
<div className="signin" >
            <div className="inner-signin">
            <div className="textandimage">
                <div className="textandimage-logo">
                    <FlexLogo style={{width:"108px",height:"42px"}}/>
                   
                    </div>
                <div className="">
                <h2>Stay connected always</h2>
                <p>All-in-one subscription management platform. Keep track of your expenses, set auto-renewal

                on subscription and pay easily with Flex

                </p>
                </div>
               
            </div>
            <div className="cancel-and-contents">
                <div className="cancel-confirm-icon"><FaEye/></div>
            <div className="input-section-reset">
                {children}
            </div>
            </div>
            </div>
        </div>

        </div>
    )


}
export default Resetpassframe