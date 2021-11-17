import React from 'react'
import Resetpassframecancel from '../../Components/Resetpassframecancel/Resetpassframecancel'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import '../Passwordconfirmation/Passwordconfirmation.css'

function Passwordconfirm(){
    const history=useHistory()
    return(
      
            <Resetpassframecancel>
                  <div className="Passwordconfirm">
           <h1>PASSWORD CONFIRMATION</h1>
          <p className="paSSwordconfirm-parag">Your password has been changed succesfully</p>
         
           
               <button onClick={(()=>{history.push("/signincontinue")})}>CONTINUE TO SIGN IN</button>
           
            </div>
            </Resetpassframecancel>
       
    )


}

export default (Passwordconfirm)