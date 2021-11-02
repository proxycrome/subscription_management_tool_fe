import React from 'react'
import base from '../../Asset/Base.png'
import '../Footer/Footer.css'
import { FaInstagram,FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

function Footer(){
return(
    <div className="Footer">
        <div className="upperfooter">
         <div className="quicklinks">
             <span >
         <h3>QUICK LINKS</h3>
             <p>Company</p>
             <p>How it works</p>
             <p>About us</p>
             <p>Partnerships</p>
             <p>Blogs</p>
             <p>Customer support</p>
             </span>
             <span>
                 <p className="copy-Right">Copyright @ 2021 Flex</p>
             </span>
         </div>

        <span className="newsletter">
            <div>
            <h3>Newsletter</h3>
            <p>Subscribe to our weekly newsletter</p>
            <input type="email" name="email" placeholder="Enter email"/>
            <button>Submit</button>
            </div>
        </span>
        <div className="footer-contact-us">
            <div>
            <h3>Contact us</h3>
            <p>Email:info@flex.com</p>
            <p>Tel: +234 800 123 5976,700 125 7088</p>
            </div>
            
            <div className='icons'>
                <FaFacebookF className="iconcontainer"/>
                <FaTwitter className="iconcontainer"/>
                <FaInstagram className="iconcontainer"/>
                <FaLinkedin className="iconcontainer"/>
            </div>
            <div className='icons'>
                <p>Terms & Conditions</p>
            </div> 
           
            
        </div>

        
        
        </div>
       
       

    </div>
    )


}

export default Footer