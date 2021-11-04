import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import { connect } from 'react-redux'
import { headercolor } from '../../redux/flex/flex.actions'

import '../About/About.css'

function About({headercolor,presentcolor}){

    useEffect(()=>{
        headercolor({ privacycolor:"#9953FF",companycolor:"#9953FF"})
                    
       
     },[])

    return(
    <div className="About">
        <div>

        <Navbar compstyle={{color:presentcolor.companycolor}} 
         privacystyle={{color:presentcolor.privacycolor,textDecoration:"none"}}
         aboutstyle={{textDecoration:"none"}}/>
        <div className="about-terms">
        <p className="headerABout">Terms and Conditions</p>
        <div className="under-Header">
        <LoremIpsum p={1}/> 
        <div className="topicdiv">
            <p className="linetopic">
                1. Introduction
             </p>
             <LoremIpsum p={2}/> 
            
            </div>
            <div className="topicdiv">
            <p className="linetopic">
                2. Account Terms
             </p>
             <LoremIpsum p={2}/> 
            
            </div>
            <div className="topicdiv">
            <p className="linetopic">
                3. Payment Methods & Payment Accounts
             </p>
             <LoremIpsum p={2}/> 
            
            </div> 
            </div>
        </div>
        </div>
       
        
        <Footer/>
    </div>
    )
}

const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor}})=>({
 
    presentcolor
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (About)