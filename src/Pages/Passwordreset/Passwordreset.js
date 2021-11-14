import React from 'react'
import Resetpassframe from '../../Components/Resetpassframe/Resetpassframe'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import {signindetails,signin} from '../../redux/flex/flex.actions'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import {passwordreset} from '../../redux/flex/flex.actions'
import '../Passwordreset/Passwordreset.css'

function Passwordreset({forgotpassword,passwordreset}){
    const[passwordshow, setPasswordshow]=useState(false)
    const[password,setPassword]=useState("")
    const[passwordsecond,setPasswordsecond]=useState("")
    const[email,setEmail]=useState("")
    const[loggedins, setLoggedins]=useState(false)
    const history=useHistory()
    console.log(forgotpassword)
    let newToken;
    

   
   
    const handletoggle=()=>{

        setPasswordshow(!passwordshow)

    }
    const submit=(e)=>{
        e.preventDefault()
        
       // else {alert('verify')}
        //history.push("/Dashboard")
        if(password===passwordsecond){
   
    const params={
        password:forgotpassword.password,
 
   
      
      
   }
   console.log(params)
  history.push("/passwordconfirmation")

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
       
        //   history.push("/Dashboard")
    //   }
    //   else{
    //       alert('invalid input')
    //   }

    
    
    // })
   
    
//     .catch((err)=>{
//      console.log(err)
//   })
}
}
    return(
      
            <Resetpassframe>
                  <div className="passwordreset">
           <h1>RESET PASSWORD</h1>
          
         
           <div className="input-and-label-forgot">
           <label>New Password</label>
           {/* <div className="forgotpass-input-div">
           <input type="email" placeholder="Password"/>
           </div> */}
            <div className="password-wrapper-reset">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={password}
            onChange={(e)=>{passwordreset({[e.target.name]:e.target.value});setPassword(e.target.value)}}/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
               </div>
               <div className="input-and-label-forgot">
                   <label>Confirm Password</label>
                   {/* <div className="forgotpass-input-div">
           <input type="email" placeholder="Password"/>
           </div> */}
            <div className="password-wrapper-reset" id="secondpass-reset">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={passwordsecond}
            onChange={(e)=>{setPasswordsecond(e.target.value)}}/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
               </div>
               <button onClick={submit}>SUBMIT</button>
           
            </div>
            <p className="remember-passreset-pass">Remember your password <Link to="/signin" className="link-rem-passreset">Sign in</Link></p>
            </Resetpassframe>
       
    )


}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     signin:(item)=> dispatch(signin(item)),
    
     passwordreset:(item)=>dispatch(passwordreset(item))
 
 })
 const mapstatetoprops=({flex:{signininput,detailssignin,forgotpassword}})=>({
 
    signininput,
     detailssignin,
     forgotpassword
    
    
 
 })

export default connect(mapstatetoprops,MapDispatchToProps) (Passwordreset)