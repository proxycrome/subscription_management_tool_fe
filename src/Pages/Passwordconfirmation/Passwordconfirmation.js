import React from 'react'
import Resetpassframecancel from '../../Components/Resetpassframecancel/Resetpassframecancel'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import flexpng from '../../Asset/flexpng.png'
import '../Passwordconfirmation/Passwordconfirmation.css'

function Passwordconfirm(){
    const history=useHistory()
    return(
        <div className="confirm-all-web-mobile">
          <div>
            <Resetpassframecancel>
                  <div className="Passwordconfirm">
           <h1>PASSWORD CONFIRMATION</h1>
          <p className="paSSwordconfirm-parag">Your password has been changed succesfully</p>
         
           
               <button onClick={(()=>{history.push("/signincontinue")})}>CONTINUE TO SIGN IN</button>
           
            </div>
            </Resetpassframecancel>
            </div>


            <div className="mobilesignin">
            <div className="mobilesigninHeader">
            <img src={flexpng} style= {{width: "78px",
        height: "32px"}}/>

        <h3>Stay connected always</h3>
        </div>
        <div className="signinmobile-inner">
        <div className="Passwordconfirm">
           <h1>PASSWORD CONFIRMATION</h1>
          <p className="paSSwordconfirm-parag">Your password has been changed succesfully</p>
         
           
               <button onClick={(()=>{history.push("/signincontinue")})}>CONTINUE TO SIGN IN</button>
           
            </div>
        </div>
        
         </div>
      

            </div>
    )


}

export default (Passwordconfirm)