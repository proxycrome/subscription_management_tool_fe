import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"; 
import '../Contact/Contact.css'

function Contact(){

    return(
        <div className="contact">

            <div>
               <Navbar/>
                <div>
                    <h2>We are here to help</h2>
                    <p className="header-text">Contact us if you have any questions about our company or products. We will try to provide an 
                        answer within a few days</p>
                        <div className="content-inner">
                            <div className="content-inner-left">
                                <div>
                                <h3>Our Contact Information</h3>
                                <p >Fill up the form and our team will get in touch and we 'll be happy to assist you</p>
                            <span className="content-inner-left-phone"><FaEye/> <p>+234800 123 5976</p></span>
                            <span className="content-inner-left-mail"> <FaEye/> <p>support@flex.com</p></span>
                            </div>
                            <div className="contact-icons">
                                <FaTwitter/><FaFacebookF/><FaInstagram/>
                            </div>
                            </div>
                            <div className="content-inner-right">
                                <h3 className="mobile-contact-text">Send us a message</h3>
                               <div className="input-content-right">
                                    <div className="input-label">
                                        <label>
                                            Full name*
                                        </label>
                                        <input type="text"/>

                                    </div>
                                    <div className="input-label">
                                        <label>
                                            Full name*
                                        </label>
                                        <input type="text"/>

                                    </div>
                                    <div className="input-label">
                                        <label>
                                            Full name*
                                        </label>
                                        <input type="text"/>

                                    </div>
                                    <div className="input-label">
                                        <label>
                                            Full name*
                                        </label>
                                        <input type="text"/>

                                    </div>
                                
                                </div>
                                <button>SEND MESSAGE</button>
                                </div>
                        </div>

                </div>
                
            </div>
            <Footer/>
        </div>
    )

}
export default Contact