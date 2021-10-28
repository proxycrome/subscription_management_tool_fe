import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import partner from '../../Asset/Partner-image.png'
import '../../Pages/Partners/Partners.css'

function Partners(){
    return(
        <div className="Partners">
            <div>

            <Navbar/>
        <div className="partner-sections">
            <h1>Learn more about our partners</h1>
        
        <div className="header-image">
     
        </div>
        </div>
        <div className="partner-second-section">
            <div className="partners-text">
                <h3>OUR PARTNERS</h3>
                <div className="design">
                <div></div><p><LoremIpsum avgWordsPerSentence={2} /></p>
                </div>
                <h2><LoremIpsum avgWordsPerSentence={2} /></h2>
            </div>
            <div className="partner-right-text">
            <LoremIpsum p={1} />
            </div>
        </div>
        <div className="partner-input">
            <h2>Ready to be our partner</h2>
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
export default Partners