import React from 'react'
import {FaEye,FaEyeSlash,FaFacebookF,FaInfo} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../../redux/flex/flex.actions';
import { signupdetails } from '../../redux/flex/flex.actions';
import { useHistory } from 'react-router-dom';
import {ReactComponent as FacebookLogo} from '../../Asset/FACEBOOK ICON.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import axios from 'axios'
import Recaptcha from 'react-recaptcha'
import '../Signup/Signup.css'

function Signup({details,signupdetails,signup}){
    
    const[countries,setCountries]=useState([])
    const[sorty,setSorty]=useState('asc')
    const[remember,setRemember]=useState(false)
    const[verified, setVerified]=useState(false)
    const[passwordCharacter,setPasswordCharacter]=useState({display:"none"})
    const[PasswordWrap,setPasswordWrap]=useState({marginBottom:"24px"})
    const[passval ,setPassval]=useState("")
    const history=useHistory()

    
    
   
    
    

        const fetchdata= async()=>{
            //const fetchdata= ()=>{

            //const response= await fetch("https://restcountries.com/v3.1/all")
            //const countries= await response.json()
           fetch("https://restcountries.com/v3.1/all")
            //fetch("https://subscription-management-tool.herokuapp.com/")
    .then(res=>res.json())
    .then(json=>{console.log(json)
       setCountries(json)})
           //setCountries(countries)
          
            .catch((err)=>{
                console.log(err)
            })

           
            
        }


        useEffect(()=>{
            fetchdata()
            //fetchsign()
    },[])
    let country=countries.map((item,index)=>{

        return(
            item.name.common
        )
    })
   
    let answer=country.sort((a,b)=>{

        const  arrange=(sorty==='asc') ? 1 : -1
        return arrange* a.toString().localeCompare(b)
    })
    
    
                   
                   

    const[passwordshow, setPasswordshow]=useState(false)

    const handletoggle=()=>{

        setPasswordshow(!passwordshow)
        

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        if((passval.length!=8) ){
            setPasswordCharacter({display:"flex"});
            setPasswordWrap({marginBottom:"5px"})
        }
        console.log(details)
        //console.log(signup)
        
        const params={
             firstName:details.firstName,
            lastName:details.lastName,
       email:details.email,
        password:details.password,
            country:details.country
           
        }
        console.log(params)
        
       //fetch("https://subscription-management-tool.herokuapp.com/register",
      //{method: 'POST',
  //body:JSON.stringify(params)})
  
       //.then((resp) => {console.log(resp)})
      
      // .catch((err)=>{
          // console.log(err)
       //})


       axios.post("https://subscription-management-tool.herokuapp.com/register",params)
  .then(res=>{
    console.log(res)
    if(((details.email)&&(details.password))!==""){
        if(remember===true){
    
        if(((JSON.parse(localStorage.getItem('useremails')))&&
         (JSON.parse(localStorage.getItem('userPassword'))))!==null){
        localStorage.setItem('userEmail', JSON.stringify(details.email));
        localStorage.setItem('userPassword', JSON.stringify(details.password));
         }
         else{localStorage.setItem('userEmail', JSON.stringify(details.email));
         localStorage.setItem('userPassword', JSON.stringify(details.password));
        
        
        }
    }
    
    }

    if(res.data.status==='success'){
        //let keeplogs=JSON.parse(localStorage.getItem('keeplog'))
        
     
        history.push("/signin")
    }





})
 
  
  .catch((err)=>{
   console.log(err)
})





       
        //alert(details)
       
       //database.push({firstname,email,password})
       // database.push(state.details,details)
        //console.log(database)
        //console.log(details.text)
       
        //setNewvalue("")
        //setNewvaluemail("")
        //setNewvaluepassword("")
        

        //database.map((val)=>{

            //console.log(val.firstname)
        //})
    }
    const rememberCheck=(()=>{
        if(((details.email)&&(details.password))!==""){
            if(remember===true){

            if(((JSON.parse(localStorage.getItem('userEmail')))&&
             (JSON.parse(localStorage.getItem('userPassword'))))!==null){
            localStorage.setItem(('userEmail', JSON.stringify(details.email)),
            ('userPassword',JSON.stringify(details.password)));  
        }
        else{ localStorage.setItem(('userEmail', JSON.stringify(details.email)),
        ('userPassword',JSON.stringify(details.password)));  }
        }

    }
    })

    const Recaptchaloaded=(()=>{
        console.log('loaded')
    })

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
        <div className="signup" >
            <div className="inner-signup">
            <div className="signup-textandimage">
                <div className="signup-textandimage-logo"><FlexLogo style={{width:"108px",height:"42px"}}/></div>
                <div>
                <h2>Stay connected always</h2>
                <p>All-in-one subscription management platform. Keep track of your expenses, set auto-renewal

                on subscription and pay easily with Flex

                </p>
                </div>
              
            </div>
            <div className="signup-input-section">
                <div className="signup-pols">
            <h3>CREATE AN ACCOUNT</h3>

            <div className="signup-firstname">
            <input type="text" name="firstName" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}} placeholder="First name" required/>
          
          
            </div>
            
            <div className="signup-lastname">
           
            <input type="text" name="lastName" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}} placeholder="Last name" required/>
          
          
            </div>
            <div className="select-div">
          
                <select name="country" id="selectlist" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}}>
                <option value="country" className="select-placeholder">Country</option>
                    {answer.map((val,index)=>{
                        return(
                            <option key={index} value={val}>{val}</option>
                        )
                    })}
                    

                </select>
           
                </div>
            
            <div className="signup-email-wrapper">
            <input type="email" name="email" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}} placeholder="Email" required/>
          
          
            </div>
           <div style={PasswordWrap} className="signup-password-wrapper">
            <input type={passwordshow ? "text": "password"} name="password" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})
            ;setPasswordCharacter({display:"none"})
            ;setPasswordWrap({marginBottom:"24px"})
        ;setPassval(e.target.value)}}
             onFocus={(()=>{setPasswordCharacter({display:"flex"});setPasswordWrap({marginBottom:"5px"})})} placeholder="Password" required/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div style={passwordCharacter} className="password-charac">
            <div className="infoDiv"><i><FaInfo/></i></div><p>Password should not be less than 8 characters and must include caps,numbers and 
            special characters</p>
            </div>
          
           <span className="signup-remember-me">
                <input type="checkbox" className="remember-checkbox" onChange={(()=>{setRemember(!remember)})}  />
                <p>Remember me</p>
           </span>
           {/* <Recaptcha
           className="recaptcha"
            sitekey="6Lf85dwcAAAAAGRU-xn3R_77p-3DkqkSyeq9WX__"
         render="explicit"
            expiredCallback={expire}
            onloadCallback={Recaptchaloaded}
           verifyCallback={verifystate}
            
            /> */}
             <button className="signup-create" onClick={handlesubmit}>CREATE ACCOUNT</button>
           <div className="terms"> 
           <div>
           <input className="terms-checkbox" type="checkbox" required />
           </div>
           <div className="terms-and-policy">
           <p >By clicking you agree to our 
            <Link to="" className="Terms-and-condition"> Terms and Conditions</Link>. See <Link className="privacy">Privacy Policy</Link></p>
            </div>
            </div>
           
          <div className="signup-orandline">  <hr className="signup-line"/><p className="signupWith">Sign up with</p> <hr className="signup-line"/></div>
          <div className="google-AND-facebook">
            <button className="signup-google"><GoogleLogo className="logoGoogle"/><p> GOOGLE</p></button>
            <button className="signup-facebook"> <FacebookLogo className="logoFace"/><p> FACEBOOK</p></button>
            </div>
            
            <p className="already-have-account">Already have an account? <Link to="/signin" className="already-have-account-log">Log in</Link></p>
           
            </div>
            </div>
            </div>
        </div>
        
    )
}


const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     signup:(item)=> dispatch(signup(item)),
    
     signupdetails:(item)=>dispatch(signupdetails(item))
 
 })
 const mapstatetoprops=({flex:{signupInput,details}})=>({
 
     signupInput,
     details,
    
    
 
 })
export default connect (mapstatetoprops,MapDispatchToProps) (Signup)