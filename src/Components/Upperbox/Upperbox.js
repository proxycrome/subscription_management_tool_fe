import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Upperbox/Upperbox.css'

function Upperbox({icon,name}){
    return(
        <div className="upperboX">
            <div className="Upperleft">
               <div className="upperleftCOntent">
                   <h2>CUSTOMER INFORMATION</h2>
                   <hr/>
                   <p>Account ID:20210801</p>
                   <h3>Customer Name:Judith Newman</h3>
                   <div className="upperleft-and-icon"><FaEye/><p>08032321123</p></div>
                   <div className="upperleft-and-icon"><FaEye/><p>Judithnewman@gmail.com</p></div>
               </div>
            </div>
            <div className="Upperright">
                <div className="cardImage">
                   
                  <div className="cardImage-acc">
                      <p>Account Id</p>
                      <p>20210801</p>
                  </div>
                    <div className="cardImage-balance">
                        <p>E-wallet Balance</p>
                        <p>NGN 134,457.56</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Upperbox