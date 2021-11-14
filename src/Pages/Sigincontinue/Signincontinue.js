import React from 'react'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import Resetpassframe from '../../Components/Resetpassframe/Resetpassframe'
import { Link } from 'react-router-dom'
import {ReactComponent as FacebookLogo} from '../../Asset/FACEBOOK ICON.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import { useHistory } from 'react-router-dom';
import {signindetails,signin} from '../../redux/flex/flex.actions'
import { connect } from 'react-redux';
import axios from 'axios'
import '../Sigincontinue/Signincontinue.css'

function Signincontinue({detailssignin,signindetails}){
    const[passwordshow, setPasswordshow]=useState(false)
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[loggedins, setLoggedins]=useState(false)
    const history=useHistory()
    let newToken;
    

   
   
    const handletoggle=()=>{

        setPasswordshow(!passwordshow)

    }
    const handlesignin=(e)=>{
        e.preventDefault()
        
       // else {alert('verify')}
        //history.push("/Dashboard")
   
    const params={
        password:detailssignin.password,
  email:detailssignin.email,
   
      
      
   }
   console.log(params)

    // axios.post("https://subscription-management-tool.herokuapp.com/login",params)
    // .then(res=>{
    //   console.log(res)
    //   console.log(res.data.data.token)
    //   let token=res.data.data.token
    //    newToken=token.split(" ")[1]
    //   console.log(newToken)
    //   if(res.data.status==='success'){
    //       //let keeplogs=JSON.parse(localStorage.getItem('keeplog'))
    //       if(loggedins===true){
    //           if((JSON.parse(localStorage.getItem('userToken')))!=null){
    //         localStorage.setItem('usertoken', JSON.stringify(newToken));
    //     }
    //     else{localStorage.setItem('usertoken', JSON.stringify(newToken));}
    //       }
       
          history.push("/Dashboard")
    //   }
    //   else{
    //       alert('invalid input')
    //   }

    
    
    // })
   
    
    .catch((err)=>{
     console.log(err)
  })
}
    return(
      
            <Resetpassframe>
                  <div className="Signincontinue">
           <h1>SIGN IN TO CONTINUE</h1>
           <p className="Signincontinue-parag">Please sign in with your new password.</p>
           {/* <button>SUBMIT</button>
           <div>
           <input type="email" placeholder="Email address"/>
               </div>
              
           <p>Remember your password <Link>Sign in</Link></p> */}
           <div className="email-wrapper">
            <input type="email" name="email" placeholder="Email address" value={email} onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setEmail(e.target.value)}}/>
          
          
            </div>
           <div className="password-wrapper">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={password}
            onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setPassword(e.target.value)}}/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div className="forgot-and-remember">
            
           <span  className="keep-logged-in"> 
           <input id="logedIn" type="checkbox" value="loggedin"
           onChange={(()=>{setLoggedins(!loggedins )})   }/>
                <label for="logedIn">Remember me</label>
           </span>
           <Link className="forgot"><p className="forgot">Forgot password?</p></Link>
           </div>

          





            <button className="create" onClick={handlesignin}>LOG IN</button>
          <div className="orandline">  <hr className="line-left"/><p className="loginWith">Log in with</p> <hr className="line-right"/></div>
          <div className="alternateSignin">
            <button className="google"><GoogleLogo className="googleLogo" />GOOGLE</button>
            <button className="facebook"><FacebookLogo className="faceLogo"/>FACEBOOK</button>
            
            </div>
            <p className="noAccount">Don't have an account? <Link to="/signup" className="noAccount-signup">Sign up</Link></p>
           
            </div>
            </Resetpassframe>
       
    )


}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     signin:(item)=> dispatch(signin(item)),
    
     signindetails:(item)=>dispatch(signindetails(item))
 
 })
 const mapstatetoprops=({flex:{signininput,detailssignin}})=>({
 
    signininput,
     detailssignin,
    
    
 
 })

export default connect(mapstatetoprops,MapDispatchToProps) (Signincontinue)