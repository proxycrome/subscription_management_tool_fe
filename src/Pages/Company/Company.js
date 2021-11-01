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
        headercolor({ companycolor:"pink",aboutcolor:"pink"})
                    
       
     },[])
    return(
        <div className="Blog">
            <div>
               <Navbar compstyle={{color:presentcolor.companycolor}} 
               aboutstyle={{color:presentcolor.aboutcolor,textDecoration:"none"}}
               privacystyle={{textDecoration:"none"}}/>
                <div>
                    <div className="company-learn">
                        <p className="learn-left">Learn more about us at Flex</p>
                        <div className="learn-right"> <LoremIpsum p={1} /></div>
                    </div>
                    <div className="company-provide">
                        <div className="company-provide-left">
                        <h2>We provide a complete software platform for managing subscription services</h2>
                            <div className="img-about-first"><img src={about}/></div>
                            <p>Check out how Flex has been performing over the past decade</p>
                        </div>
                        <div className="provide-left-center">
                        <h3>Learn more about us at Flex</h3>
                        <LoremIpsum p={1} />
                       
                        </div>
                    </div>
                    <div className="company-how">
                        <div className="company-how-left">
                        <h2>How we 're doing</h2>
                        <p className="header-Paragraph"><LoremIpsum avgWordsPerSentence={1} /></p>
                        <div className="company-doing">
                            <div className="company-doing-content" id="marginExtra">
                              
                                <div id="marginExtraP">  <p>10 Years of Experience</p></div>
                           
                                <div>  <p>10 Years of Experience</p></div>
                        </div>
                        <div className="company-doing-content" id="marginExtraSecond">
                              
                                <div id="marginExtraX">  <p>10 Years of Experience</p></div>
                           
                                <div>  <p>10 Years of Experience</p></div>
                        </div>
                        </div>
                       
                        </div>
                        <div className="abouty-div"><img src={abouty}/></div>
                    </div>
                    <div className="company-about">
                        <div className="about-us">
                        <h2>About Us</h2>
                        <p>
                        <LoremIpsum avgWordsPerSentence={4} />
                        <LoremIpsum avgWordsPerSentence={1} />
                        </p>
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