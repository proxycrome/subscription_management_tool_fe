import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import '../Company/Company.css'
function Company(){
    return(
        <div className="Blog">
            <div>
               <Navbar/>
                <div>
                    <div className="company-learn">
                        <p className="learn-left">Learn more about us at Flex</p>
                        <div className="learn-right">IMAGE</div>
                    </div>
                    <div className="company-provide">
                        <div className="company-provide-left">
                        <h2><LoremIpsum avgWordsPerSentence={1} /></h2>
                            <div>IMAGE</div>
                        </div>
                        <div>
                        <h3>Learn more about us at Flex</h3>
                        <LoremIpsum p={1} />
                       
                        </div>
                    </div>
                    <div className="company-how">
                        <div className="company-how-left">
                        <h2><LoremIpsum avgWordsPerSentence={1} /></h2>
                        <p><LoremIpsum avgWordsPerSentence={1} /></p>
                        <div className="company-doing">
                            <div className="company-doing-content">
                              
                                <div>  <p>10 Years of Experience</p></div>
                           
                                <div>  <p>10 Years of Experience</p></div>
                        </div>
                        <div className="company-doing-content">
                              
                                <div>  <p>10 Years of Experience</p></div>
                           
                                <div>  <p>10 Years of Experience</p></div>
                        </div>
                        </div>
                       
                        </div>
                        <div>IMAGE</div>
                    </div>
                    <div></div>
                    <div>IMAGE</div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}
export default Company