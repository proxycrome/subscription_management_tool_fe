import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import '../How-it-works/How-it-works.css' 


function HowWorks(){
    //avgWordsPerSentence
    return (
    <div className="HowWorks">

        <div>
            <Navbar/>
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
                    <div className="works-image">IMAGE</div>
                </div>
            
           
            
                </div>
            <div className="works-and-image">
                <div className="works-outer">
                <div className="works-image-second">IMAGE</div>
                    <div className="works-inner-second">
                       <h2>Our Featured Functionalities</h2>
                    <LoremIpsum p={1} />
                        
                    </div>
                   
                </div>
            
           
            </div>
            <div className="works-and-image">
                <div className="works-outer">
                    <div className="works-inner">
                    <h2>Our Featured Functionalities</h2>
                    <LoremIpsum p={1} />
                       
                    </div>
                    <div className="works-image">IMAGE</div>
                </div>
            </div>
            <div className="mobile-works-inner">
            <h2>Our Featured Functionalities</h2>
                <div>IMAGE</div>
                <LoremIpsum p={1} />


                </div>
                <div className="mobile-works-inner">
            <h2>Our Featured Functionalities</h2>
                <div>IMAGE</div>
                <LoremIpsum p={1} />


                </div>
            <div className="works-lower">
                <p className="work-intro">A few reasons why you should join us</p>
                <p className="work-intross">A few reasons why you should join us</p>
                <div className="work-intro-show">
                    <div className="works-lower-inner">
                        <span>
                            <h2>Collaboration</h2>
                            
                            
                        </span>
                        <span>
                        <h2>Collaboration</h2>
                           
                           

                        </span>
                    </div>
                    <div className="works-lower-inner">
                    <span>
                            <i>Image</i>
                            <h2>Collaboration</h2>
                            <p>kkoooo</p>
                            
                        </span>
                        <span>
                        <h2>Collaboration</h2>
                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

    </div>)

}
export default HowWorks 