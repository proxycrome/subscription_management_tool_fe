import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import partner from '../../Asset/Partner-image.png'
import '../../Pages/Partners/Partners.css'
import { connect } from 'react-redux'
import { headercolor } from '../../redux/flex/flex.actions'
import {useEffect} from 'react'


function Partners({headercolor,presentcolor}){
    useEffect(()=>{
       headercolor({partcolor:"#9953FF"})
                   
      
    },[])
    console.log(presentcolor.partcolor)
    return(
        <div className="Partners">
            <div>

            <Navbar partstyle={{color:presentcolor.partcolor}}
            aboutstyle={{textDecoration:"none"}}  privacystyle={{textDecoration:"none"}}/>
        <div className="partner-sections">
            <h1>Learn more about our partners</h1>
        
        <div className="header-image">
     <img src={partner}/>
        </div>
        </div>
        <div className="partner-second-section">
            <div className="partners-text">
                <h3>OUR PARTNERS</h3>
                <div className="design">
                <LoremIpsum avgWordsPerSentence={2} />
                </div>
                <h2>"Partner integrations made easy"</h2>
                <p><LoremIpsum avgWordsPerSentence={2} /></p>
            </div>
            <div className="partner-right-text">
            <LoremIpsum p={1} />
            <LoremIpsum p={1} />
            </div>
        </div>
        <div className="partner-input">
            <h2>Ready to be our partner?</h2>
            <div className="partner-input-area">
                <div className="Partner-areas">
                <div className="partner-input-class">
                    <label>Full name </label>
                <input type="text" name="fullName"/>
                </div>
                <div className="partner-input-class">
                    <label>Full name </label>
                <input type="text" name="fullName"/>
                </div>
                </div>
                <div className="Partner-areas">
                <div className="partner-input-class">
                    <label>Full name </label>
                <input type="text" name="fullName"/>
                </div>
                <div className="partner-input-class">
                    <label>Full name </label>
                <input type="text" name="fullName"/>
                </div>
                </div>
                <div className="partner-extra">
            <p>Tell us a bit about you*</p>
            <textarea className="textarea"/>
            <p>By submitting this form you agree to our terms and conditions and our Privacy Policy</p>
            <button>APPLY NOW</button>
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

export default connect( mapstatetoprops,MapDispatchToProps)  (Partners)