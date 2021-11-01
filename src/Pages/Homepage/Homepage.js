import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import {useHistory} from 'react-router-dom'
import partner from '../../Asset/Partner-image.png'
import shot from '../../Asset/Shot.png'
import lady from '../../Asset/Pictures.jpg'
import operate from '../../Asset/operate.jpg'
import partnerLogo from '../../Asset/partners.png'
import overlay from '../../Asset/Overlay2.png'
import { connect } from 'react-redux'

import '../Homepage/Homepage.css'
import Footer from '../../Components/Footer/Footer'

function Homepage({presentcolor}){
    const history=useHistory()

    useEffect(()=>{
        let logs=JSON.parse(localStorage.getItem('usertoken'));
        //console.log(logs)
        if(logs!==null){
           
           history.push("/Dashboard")
       }

    },[])
return(
    <div className="Homepage">
       <Navbar privacystyle={{color:presentcolor.privacycolor,textDecoration:"none"}}
         aboutstyle={{textDecoration:"none"}}/>
        <div className="Homebody">
        

        <div className="Bodyinner">
            <div >
                <div className="Innercontent-original">
                <div className="contents-original">
                    <h2>Subscription Management Made Easy!</h2>
                    <p>Flex is a subscription management platform that allows you to manage multiple
                        subsription plans. It gives you the freedom to control and keep track of your
                        expenses </p>
                       
                        <span className="buttons">

                        
                        <button onClick={(()=>{history.push("/signup")})}>REGISTER</button>
                        <button id="sep-button" onClick={(()=>{history.push("/signin")})}>LOGIN</button>
                        </span>
                        <span className="partnerlogo"><img src={partnerLogo}/></span>
                </div>
                <div className="laptop-image"><img src={lady}/></div>
                
                </div>
                <div className="Innercontent-original-mobile">
                <div className="contents-original">
                    <h2>Subscription Management Made Easy!</h2>
                    <p>Flex is a subscription management platform that allows you to manage multiple
                        subsription plans. It gives you the freedom to control and keep track of your
                        expenses </p>
                        </div>
                        <div className="laptop-image"><img src={lady}/></div>
                        <span className="buttons">

                        
                        <button onClick={(()=>{history.push("/signup")})}>REGISTER</button>
                        <button id="sep-button" onClick={(()=>{history.push("/signin")})}>LOGIN</button>
                        </span>
                
              
                </div>
                <div className="Innercontent">
                <div className="laptop-image"><img src={operate}/></div>
                <div className="contents">
                    <h2>Operate on a single platform</h2>
                    <p>Managing and keeping track of multiple subscriptions could be tedious. With Flex,
                        you need not worry about that as all subscriptions are easily managed on one platform. </p>
                        
                </div>
                
                </div>
                <div className="Innercontent">
                <div className="contents">
                    <h2>Take your subscription plan to another level</h2>
                    <p>We provide our esteemed users with so much flexibility with our payment platforms. No need
                        to worry about security because we have gott you covered </p>
                        
                </div>
                <div className="laptop-image"><img src={shot}/></div>
                </div>
                
               
                
                <div className="Innercontent">
                <div className="laptop-image"> <img src={partner}/></div>
                <div className="contents">
                    <h2>Our Partners</h2>
                    <p>We build trust and confidence with our partners by being one of the first brands to create a well secured payment
                        platform with some of the best companies recognized globally </p>
                        
                       

                        <button className="buttons-partner">Become a partner</button>
                       
                       
                </div>
                
               
                </div>
                <div className="mobile-inner-content">
                <h2>Operate on a single platform</h2>
                <div className="mobile-img-div"> <img src={operate}/></div>
                <p>Managing and keeping track of multiple subscriptions could be tedious. With Flex,
                        you need not worry about that as all subscriptions are easily managed on one platform. </p>


                </div>
                <div className="mobile-inner-content">
                <h2>Take your subscription plan to another level</h2>
                <div className="mobile-img-div"> <img src={shot}/></div>
                <p>We provide our esteemed users with so much flexibility with our payment platforms. No need
                        to worry about security because we have gott you covered </p>


                </div>
                <div className="mobile-inner-content">
                <h2>Our Partners</h2>
                <div className="mobile-img-div">  <img src={partner}/> </div>
                <p>We build trust and confidence with our partners by being one of the first brands to create a well secured payment
                        platform with some of the best companies recognized globally </p>
                        
                       

                        <button className="buttons-partner">Become a partner</button>

                </div>
                <div className="love">

                    <h2>Love from customers</h2>
                   
                   
                   
                    <p>We share common trends and strategies for improving your rental income and making sure 
                        you stay in high demand</p>
                        
                </div>
                <div className="blog">
                    <button>OUR BLOG</button>
                  
                    <h3>Don't miss out recent articles</h3>
                    <p className="blog-top-parag">We share common trends and strategies for improving your rental income and making sure 
                        you stay in high demand</p>
                        <div className="blog-container">
                        <div className="blog-div-show">
                            <div className="blog-content">
                                <div className="blog-img-div">
                                <img src={overlay}/>
                                </div>
                                <div className="below-img-blog">
                                <h2>Growth of SaaS industry</h2>
                                <p className="below-img-blog-p">Subscription-based saaS application and licensing makes utilizing..</p>
                                <span className="blog-innermost">
                                    <div className="blog-landing-profile">
                                        <div className="blog-profile-img">
                                        <img src={overlay}/>
                                        </div>
                                    <p className="blog-left">Tina Lawal</p>
                                    </div>
                                    <div>
                                    <p className="blog-right">02 Dec</p>
                                    </div>
                                </span>
                                
                                </div>

                            </div>
                        
                        
                        </div>
            
                        <div className="blog-div">
                            <div className="blog-content">
                                <div className="blog-img-div">
                                <img src={overlay}/>
                                </div>
                                <div className="below-img-blog">
                                <h2>Growth of SaaS industry</h2>
                                <p className="below-img-blog-p">Subscription-based saaS application and licensing makes utilizing..</p>
                                <span className="blog-innermost">
                                <div className="blog-landing-profile">
                                        <div className="blog-profile-img">
                                        <img src={overlay}/>
                                        </div>
                                    <p className="blog-left">Tina Lawal</p>
                                    </div>
                                    <div>
                                    <p className="blog-right">02 Dec</p>
                                    </div>
                                </span>
                                
                                </div>

                            </div>
                        </div>

                        <div className="blog-div">
                            <div className="blog-content">
                                <div className="blog-img-div">
                                <img src={overlay}/>
                                </div>
                                <div className="below-img-blog">
                                <h2>Growth of SaaS industry</h2>
                                <p className="below-img-blog-p">Subscription-based saaS application and licensing makes utilizing..</p>
                                <span className="blog-innermost">
                                <div className="blog-landing-profile">
                                        <div className="blog-profile-img">
                                        <img src={overlay}/>
                                        </div>
                                    <p className="blog-left">Tina Lawal</p>
                                    </div>
                                    <div>
                                    <p className="blog-right">02 Dec</p>
                                    </div>
                                </span>
                                
                                </div>

                            </div>
                        </div>
               
                </div>
                <button className="seeAll">See all</button>
                </div>
               
                
            </div>
           
        </div>




        </div>
        <Footer/>
    </div>
)


}

const mapstatetoprops=({flex:{presentcolor}})=>({
 
    presentcolor
   
   

})

export default connect( mapstatetoprops) (Homepage)