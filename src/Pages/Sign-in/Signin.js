import React from 'react'
import {FaEye} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {ReactComponent as FacebookLogo} from '../../Asset/facebook.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import Recaptcha from 'react-recaptcha'
import {signindetails,signin} from '../../redux/flex/flex.actions'
import axios from 'axios'
import '../Sign-in/Signin.css'


    
     function Signin({detailssignin,signindetails}){
    const[passwordshow, setPasswordshow]=useState(false)
    const[verified, setVerified]=useState(false)
    const[loggedins, setLoggedins]=useState(false)
    const history=useHistory()

    let newToken;
    const Recaptchaloaded=(()=>{
        console.log('loaded')
    })

   
   
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
            localStorage.setItem('usertoken', JSON.stringify(newToken));
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
    

    const verifystate=((res)=>{

        if(res){
            setVerified(true)
        }
    })
    const expire= (()=>{
        alert('expire')
    })
    const onchange=(()=>{
       
    })
   // render="explicit"
          //  expiredCallback={expire}
           // onloadCallback={Recaptchaloaded}
           // verifyCallback={verifystate}
           //?onload=onloadCallback&render=explicit"
    return(
        <div className="signin" >
            <div className="inner-signin">
            <div className="textandimage">
                <div className="textandimage-logo">LOGO</div>
                <div className="">
                <h2>Stay connected always</h2>
                <p>All-in-one subscription management platform. Keep track of your expenses, set auto-renewal

                on subscription and pay easily with Flex

                </p>
                </div>
                <div className="copy">&copy;2021 Flexdesignteam</div>
            </div>
            <div className="input-section">
                <div className="pols">
            <h1>WELCOME BACK!</h1>
            <p className="header-parag">Sign in to continue with Flex</p>
            
            <div className="email-wrapper">
            <input type="email" name="email" placeholder="Email" onChange={(e)=>{signindetails({[e.target.name]:e.target.value})}}/>
          
          
            </div>
           <div className="password-wrapper">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password"
            onChange={(e)=>{signindetails({[e.target.name]:e.target.value})}}/>
            <i onClick={handletoggle}><FaEye/></i>
          
            </div>
            
            <Link className="forgot"><p className="forgot">Forgot password?</p></Link>
           <span className="keep-logged-in"> <input type="checkbox" value="loggedin"
           onChange={(()=>{setLoggedins(!loggedins )})   }/>
                <p>Keep me logged in</p>
           </span>

           <Recaptcha
            sitekey="6Lf85dwcAAAAAGRU-xn3R_77p-3DkqkSyeq9WX__"
         render="explicit"
            expiredCallback={expire}
            onloadCallback={Recaptchaloaded}
           verifyCallback={verifystate}
            
            />





            <button className="create" onClick={handlesignin}>Sign in</button>
          <div className="orandline">  <hr className="line"/>OR <hr className="line"/></div>
            <button className="google"><GoogleLogo/>Sign up with Google</button>
            <button className="facebook"><FacebookLogo/>Sign up with Facebook</button>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
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