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
        <p className="flex-about-parag">Flex is the best and easiest way to manage your multiple subcriptions. 
        It gives you the freedom to control  and keep track of your expenses. </p>
        <div className="topicdiv">
            <p className="linetopic">
                1. Introduction
             </p>

             
    <p className="conditionText">
    <span className="height-excep"> By signing up for a Flex Account (as defined in Section 2) or by using any Flex Services 
        (as defined below), you are agreeing to be bound by the following terms and conditions.</span><br/><br/>

<span className="height-excep">  As used in these Terms & Conditions, “we”, “us” and “Flex” means the applicable Flex Contracting 
Party (as defined in Section 5 below).</span><br/><br/>

The services offered by Flex under the Terms & Conditions include various products and services to 
help you manage and control your subscriptions online. Any new features or tools which are added to the 
current Services shall be also subject to the Terms and Conditions. You can review the current version of 
the Terms and Conditions at any time at https://www.flex.ng/legal/terms. Flex reserves the right to 
update and change the Terms and Conditions by posting updates and changes to the Flex website. You are 
advised to check the Terms and Conditions from time to time for any updates or changes that may impact 
you, and if you do not accept such amendments, you must cease using the Services.<br/><br/>

You must read, agree with and accept all of the terms and conditions contained or expressly referenced in 
these Terms and Condition before you may sign up for a Flex Account or use any Flex Service.

  </p>  
   





            </div>
            <div className="topicdiv">
            <p className="linetopic">
                2. Account Terms
             </p>
             <p className="conditionText">
             To access and use the Services, you must register for a Flex account (“Account”) by providing your 
             full legal name, country, phone number, a valid email address, and any other information indicated as 
             required. Flex may reject your application for an Account, or cancel an existing Account, for any reason, in our sole discretion.<br/><br/>

You must be the older of: (i) 18 years, or (ii) at least the age of majority in the jurisdiction where you reside and from which you
 use the Services to open an Account.<br/><br/>

You acknowledge that Flex will use the email address you provide on opening an Account or as updated by you from time to time as
 the primary method for communication with you.

You are responsible for keeping your password secure. Flex cannot and will not be liable for any loss or damage from your failure
 to maintain the security of your Account and password.<br/><br/>

A breach or violation of any term in the Terms and Conditions, as determined in the sole discretion of Flex may result in an 
immediate termination of your Services.

</p>
            
            </div>
            <div className="topicdiv">
            <p className="linetopic">
                3. Payment Methods & Payment Accounts
             </p>
             <p className="conditionText">
             Upon completion of sign up for the Service, Flex will create a Paystack and Flutterwave account on your 
             behalf, using your email address.<br/><br/>

You acknowledge that Paystack and/or Flutterwave will be your default payment gateway(s) and that it is your sole 
responsibility to maintain these accounts. If you do not wish to keep either of the payment accounts active, you can resort to our E- wallet feature. For the avoidance of doubt, Paystack and Flutterwave are Third Party Services.
            
          </p>  
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