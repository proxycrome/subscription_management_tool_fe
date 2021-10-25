import React from 'react'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {ReactComponent as FacebookLogo} from '../../Asset/facebook.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import Recaptcha from 'react-recaptcha'
import {signindetails,signin} from '../../redux/flex/flex.actions'
import axios from 'axios'
import '../Sign-in/Signin.css'


    
     function Signin({detailssignin,signindetails}){
    const[passwordshow, setPasswordshow]=useState(false)
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[verified, setVerified]=useState(false)
    const[loggedins, setLoggedins]=useState(false)
    const history=useHistory()



    useEffect(()=>{
        let remeberEmail=JSON.parse(localStorage.getItem('userEmail'))
        let rememberPassword=JSON.parse(localStorage.getItem('userPassword'))
    if((remeberEmail && rememberPassword)!==null){
        setEmail(remeberEmail)
      setPassword(rememberPassword)
      signindetails({email:email})
      signindetails({password:password})

    }


    })

    let newToken;
    

   
   
    const handletoggle=()=>{

        setPasswordshow(!passwordshow)

    }
    const handlesignin=(e)=>{
        e.preventDefault()
        if(verified===true){
           // alert("true")
           
            //console.log(detailssignin)
        }
       // else {alert('verify')}
        //history.push("/Dashboard")
   
    const params={
        password:detailssignin.password,
  email:detailssignin.email,
   
      
      
   }
   console.log(params)

    axios.post("https://subscription-management-tool.herokuapp.com/login",params)
    .then(res=>{
      console.log(res)
      console.log(res.data.data.token)
      let token=res.data.data.token
       newToken=token.split(" ")[1]
      console.log(newToken)
      if(res.data.status==='success'){
          //let keeplogs=JSON.parse(localStorage.getItem('keeplog'))
          if(loggedins===true){
              if((JSON.parse(localStorage.getItem('userToken')))!=null){
            localStorage.setItem('usertoken', JSON.stringify(newToken));
        }
        else{localStorage.setItem('usertoken', JSON.stringify(newToken));}
          }
       
          history.push("/Dashboard")
      }
      else{
          alert('invalid input')
      }

    
    
    })
   
    
    .catch((err)=>{
     console.log(err)
  })
}
    //const keeploggedin=(e)=>{

        //console.log(e.target.checked)
       
        //JSON.parse(localStorage.getItem('auth'));
        //let usertokens=e.target.checked
       // if(e.target.checked===true){
       // localStorage.setItem('keeplog', JSON.stringify(e.target.checked));
       // }
    //}
    

    
    return(
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
            <div className="input-section">
                <div className="inner-input-section">
                <div className="pols">
            <h2>WELCOME BACK!</h2>
            <p className="header-parag">Enter your details to continue..</p>
            
            <div className="email-wrapper">
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setEmail(e.target.value)}}/>
          
          
            </div>
           <div className="password-wrapper">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={password}
            onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setPassword(e.target.value)}}/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div className="forgot-and-remember">
            
           <span className="keep-logged-in"> <input type="checkbox" value="loggedin"
           onChange={(()=>{setLoggedins(!loggedins )})   }/>
                <p>Remember me</p>
           </span>
           <Link className="forgot"><p className="forgot">Forgot password?</p></Link>
           </div>

          





            <button className="create" onClick={handlesignin}>Log in</button>
          <div className="orandline">  <hr className="line"/>OR <hr className="line"/></div>
          <div className="alternateSignin">
            <button className="google"><GoogleLogo className="googleLogo" />Log in with Google</button>
            <button className="facebook"><FaFacebookF className="faceLogo"/>Log in with Facebook</button>
            </div>
            </div>
            <p className="noAccount">Don't have an account? <Link to="/signup" className="noAccount-signup">Sign up</Link></p>
           
            </div>
            </div>
            </div>
        </div>
        
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
export default connect(mapstatetoprops,MapDispatchToProps) (Signin)