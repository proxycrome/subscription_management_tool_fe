import React from 'react'
import Resetpassframecancel from '../../Components/Resetpassframecancel/Resetpassframecancel'
import { Link } from 'react-router-dom'
import '../Requestconfirm/Requestconfirm.css'

function Requestconfirm(){
    return(
      
            <Resetpassframecancel>
                  <div className="Requestconfirm">
           <h1>REQUEST CONFIRMATION</h1>
           <p className="Requestconfirm-parag">A link has been sent to your email: judithnewman@gmail.com .</p>
           <button>CHECK MAIL</button>
           
              
           <p className="remember-request-pass">Remember your password <Link to="/signin"  className="link-rem-request">Sign in</Link></p>
            </div>
            </Resetpassframecancel>
       
    )


}

export default Requestconfirm