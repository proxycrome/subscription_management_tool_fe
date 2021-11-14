import React from 'react'
import Resetpassframe from '../../Components/Resetpassframe/Resetpassframe'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../Resetpassword/Resetpassword.css'

function Resetpassword(){
    const history=useHistory()
    return(
      
            <Resetpassframe>
                <div>
                  <div className="Resetpassword">
           <h1>REQUEST PASSWORD RESET</h1>
           <p className="Resetpassword-parag">Please provide ypur registered email address.</p>
          
           <div className="reset-email-div">
           <input type="email" placeholder="Email address"/>
               </div>
               {/* <div className="email-wrapper">
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setEmail(e.target.value)}}/>
          
          
            </div> */}
             <button onClick={(()=>{history.push("/Requestconfirm")})}>SUBMIT</button>
             </div>
           <p className="remember-reset-pass">Remember your password <Link to="/signin" className="link-rem">Sign in</Link></p>
           </div>
            </Resetpassframe>
       
    )


}

export default Resetpassword