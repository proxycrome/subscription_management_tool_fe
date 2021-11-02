import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import '../How-it-works/How-it-works.css' 
import { connect } from 'react-redux'
import { headercolor } from '../../redux/flex/flex.actions'
import {useEffect} from 'react'
import splash from '../../Asset/splash.png'
import worknew from '../../Asset/worknew.png'
import splashsec from '../../Asset/splashsec.png'
import check from '../../Asset/check.png'
import iconDots from '../../Asset/Icon.png'



function HowWorks({headercolor,presentcolor}){
    //avgWordsPerSentence
    useEffect(()=>{
        headercolor({ howcolor:"#9953FF"})
                    
       
     },[])
     console.log(presentcolor.howcolor)
    return (
    <div className="HowWorks">

        <div>
            <Navbar howworks={{color:presentcolor.howcolor}}
            aboutstyle={{textDecoration:"none"}}  privacystyle={{textDecoration:"none"}}/>
            <h2 className="work-header">We Focus on Structured and Sustainable Subscription Management.</h2>
            <div className="work-header-line-div">
            <hr className="work-header-line"/>
            </div>
            <div className="works-and-image-original">
                <div className="works-outer">
                    <div className="works-inner">
                    <LoremIpsum p={1} />
                        <button>WATCH VIDEO</button>
                    </div>
                    <div className="works-image-first"><img src={splash}/></div>
                </div>
            
           
            
                </div>
            <div className="works-and-image">
                <div className="works-outer">
                <div className="works-image-second"><img src={worknew}/></div>
                    <div className="works-inner-second">
                       <h2>Our Featured Functionalities</h2>
                       <p>Here 're some of the features Flex has to offer</p>
                       <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>
                       <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>
                   
                        
                    </div>
                   
                </div>
            
           
            </div>
            <div className="works-and-image">
                <div className="works-outer">
                    <div className="works-inner">
                    <h2>Our Featured Functionalities</h2>
                       <p>Here 're some of the features Flex has to offer</p>
                       <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>
                       <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>
                       
                    </div>
                    <div className="works-image"><img src={worknew}/></div>
                </div>
            </div>
            <div className="mobile-works-inner">
            <h2>Our Featured Functionalities</h2>
                <div className="mobile-work-img"><img src={worknew}/></div>
                <p>Here 're some of the features Flex has to offer</p>
                <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>
                       <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>

                       </div>
                <div className="mobile-works-inner">
            <h2>Our Featured Functionalities</h2>
                <div className="mobile-work-img"><img src={worknew}/></div>
                <p>Here 're some of the features Flex has to offer</p>
                <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>
                       <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>


                </div>
            <div className="works-lower">
                <p className="work-intro">A few reasons why you should join us</p>
                <p className="work-intross">A few reasons why you should join us</p>
                <div className="work-intro-show">
                    <div className="works-lower-inner">
                        <span>
                        <i className="funct-Image-div"><img src={iconDots}/></i>
                            <h2>Collaboration</h2>
                            
                        <p>Trust will help us foster a positive and productive environment that delivers
                                value to our users and customers.
                            </p>
                            
                        </span>
                        <span>
                        <i className="funct-Image-div"><img src={iconDots}/></i>
                        <h2>Collaboration</h2>
                           
                        
                        <p>Trust will help us foster a positive and productive environment that delivers
                                value to our users and customers.
                            </p>
                        </span>
                    </div>
                    <div className="works-lower-inner">
                    <span>
                            <i className="funct-Image-div"><img src={iconDots}/></i>
                            <h2>Collaboration</h2>
                            <p>Trust will help us foster a positive and productive environment that delivers
                                value to our users and customers.
                            </p>
                            
                        </span>
                        <span>
                        <i className="funct-Image-div"><img src={iconDots}/></i>
                        <h2>Collaboration</h2>
                        <p>Trust will help us foster a positive and productive environment that delivers
                                value to our users and customers.
                            </p> 
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

    </div>)

}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor}})=>({
 
    presentcolor
   
   

})
export default connect(mapstatetoprops,MapDispatchToProps) (HowWorks) 