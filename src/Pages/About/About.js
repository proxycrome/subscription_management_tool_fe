import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import { connect } from 'react-redux'
import { headercolor } from '../../redux/flex/flex.actions'

import '../About/About.css'

function About({headercolor,presentcolor}){

    useEffect(()=>{
        headercolor({ privacycolor:"pink",companycolor:"pink"})
                    
       
     },[])

    return(
    <div className="About">
        <div>

        <Navbar compstyle={{color:presentcolor.companycolor}} 
         privacystyle={{color:presentcolor.privacycolor,textDecoration:"none"}}
         aboutstyle={{textDecoration:"none"}}/>
        <div className="about-terms">
        <h1>Terms and Conditions</h1> 
        <LoremIpsum p={5} />
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