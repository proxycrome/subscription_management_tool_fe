import React from 'react'
import Resetpassframe from '../../Components/Resetpassframe/Resetpassframe'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { setnewemail } from '../../redux/flex/flex.actions'
import { connect } from 'react-redux'
import '../Resetpassword/Resetpassword.css'

function Resetpassword({setnewemail,newemail}){
    const history=useHistory()
    console.log(newemail.email)
    return(
      
            <Resetpassframe>
                <div>
                  <div className="Resetpassword">
           <h1>REQUEST PASSWORD RESET</h1>
           <p className="Resetpassword-parag">Please provide your registered email address.</p>
          
           <div className="reset-email-div">
           <input type="email" placeholder="Email address" name="email"  onChange={((e)=>{setnewemail({[e.target.name]:e.target.value})})}/>
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
const MapDispatchToProps=(dispatch)=>({

  //const userinput= {[items]:value}
   //signin:(item)=> dispatch(signin(item)),
  
   setnewemail:(item)=>dispatch(setnewemail(item))

})
const mapstatetoprops=({flex:{newemail}})=>({

  newemail
 
 

})

export default connect(mapstatetoprops,MapDispatchToProps) (Resetpassword)