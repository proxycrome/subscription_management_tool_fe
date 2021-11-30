import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { connect } from 'react-redux'
import { headercolor } from '../../redux/flex/flex.actions'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import abouty from '../../Asset/aboutUs2.png'
import rectangle from '../../Asset/Rectangle.png'
import about from '../../Asset/about us.png'
import image from '../../Asset/Image.png'
import image2 from '../../Asset/Image2.png'
import image3 from '../../Asset/Image3.png'
import image4 from '../../Asset/Image4.png'
import image5 from '../../Asset/Image5.png'


import '../Company/Company.css'
function Company({headercolor,presentcolor}){
    useEffect(()=>{
        headercolor({ companycolor:"#9953FF",aboutcolor:"#9953FF"})
                     
        
     },[])
    return(
        <div className="comPany">
            <div>
               <Navbar compstyle={{color:presentcolor.companycolor,paddingBottom:"0",marginBottom:"0",}} 
               aboutstyle={{color:presentcolor.aboutcolor,textDecoration:"none"}}
               privacystyle={{textDecoration:"none",}}
               linestyle={{marginTop:"4px",paddingTop:"0",borderTop:"1px solid #6200f0",alignSelf:"start",marginLeft:"0px",width:"16px"}}/>
                <div>
                    <div className="company-learn">
                        <div className="p">
                        <h2 className="learn-left">Learn more about us at Flex</h2>
                        <div className="line-under-learn-left"></div>
                        </div>
                        <div className="learn-right"> For over 10 years, Flex has enabled thousands of businesses to manage the recurring revenue 
                        lifecycle. Our vision is to become recognized by our customers as the indispensable system for running
                        a subscription business.</div>
                    </div>
                    <div className="company-provide">
                        <div className="company-provide-left">
                        <h2>We provide a complete software platform for managing subscription services</h2>
                            <div className="img-about-first"><img src={about}/></div>
                            {/* <p>Check out how Flex has been performing over the past decade</p> */}
                        </div>
                        <div className="provide-left-center">
                        <h3>We are experts in our field and are able to transform and provide subscription services , 
                            integrated payment methods and wide range of
subscription management.</h3>
                        <p>Over the past decade, Flex has expanded its offerings to address the complexities of Recurring billing and
                             Subscription Management. </p>
                       
                       
                        </div>
                    </div>
                    <div className="company-how">
                    
                        <div className="company-how-left">
                        <h2>How we 're doing</h2>
                        <div className="header-Paragraph"><p>Check out how Flex has been performing over the past decade.</p></div>
                        <div className="abouty-div" id="mobile-abouty-div"><img src={abouty}/></div>
                        <div className="company-doing">
                            <div className="company-doing-content" id="marginExtra">
                              
                                <div id="marginExtraP"> 
                                <p className="numberAbout">10</p>
                                 <p className="textABout"> Years of Experience</p>
                                 </div>
                           
                                <div>  
                                <p className="numberAbout">27</p>
                                    <p className="textABout"> Partners</p></div>
                        </div>
                        <div className="company-doing-content" id="marginExtraSecond">
                              
                                <div id="marginExtraX"> 
                                <p className="numberAbout">20</p>
                                 <p className="textABout"> Smart Working
People</p></div>
                           
                                <div> 
                                <p className="numberAbout">40k+</p>
                                 <p className="textABout"> Subscriptions under
management</p></div>
                        </div>
                        </div>
                       
                        </div>
                        <div className="abouty-div" id="web-abouty-div"><img src={abouty}/></div>
                    </div>
                    <div className="company-about">
                        <div className="about-us">
                        <h2>About Us</h2>
                        <div>
                       <p> Flex combines great technology, subscription expertise, and a customer service ethos to solve real-world problems
                            and is committed to becoming the operating system for your subscription business.<br/>

We provide a complete software platform for managing telecommunication services, subscription services and billing process.
                       </p>
                        </div>
                        </div>
                        <div className="imagesDivs">
                           <div className="image-One">
                               <div className="shaped-image-div"><img src={image5}/></div>
                               <div className="shaped-image-div"><img src={image}/></div>
                           </div>
                           <div className="image-Two">
                              
                               <div className="shaped-image-div"><img src={image4}/></div>
                           </div>
                           <div className="image-Three">
                               <div className="shaped-image-div-first"><img src={image3}/></div>
                               <div className="shaped-image-div"><img src={image2}/></div>
                           </div>

                        </div>
                    </div>
                    <div className="rectangle-div"><img src={rectangle}/></div>
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
export default connect(mapstatetoprops,MapDispatchToProps) (Company)