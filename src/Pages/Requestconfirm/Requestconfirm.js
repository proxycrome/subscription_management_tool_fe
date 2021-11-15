import React from 'react'
import Resetpassframecancel from '../../Components/Resetpassframecancel/Resetpassframecancel'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../Requestconfirm/Requestconfirm.css'

function Requestconfirm({newemail}){
   
    return(
      
            <Resetpassframecancel>
                  <div className="Requestconfirm">
           <h1>REQUEST CONFIRMATION</h1>
           <p className="Requestconfirm-parag">A link has been sent to your email: {newemail.email} .</p>
           <button>CHECK MAIL</button>
           
              
           <p className="remember-request-pass">Remember your password <Link to="/signin"  className="link-rem-request">Sign in</Link></p>
            </div>
            </Resetpassframecancel>
       
    )


}
const mapstatetoprops=({flex:{newemail}})=>({

    newemail
   
   
  
  })

export default connect(mapstatetoprops) (Requestconfirm)