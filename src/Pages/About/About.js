import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import '../About/About.css'

function About(){

    return(
    <div className="About">
        <div>

        <Navbar/>
        <div className="about-terms">
        <h1>Terms and Conditions</h1> 
        <LoremIpsum p={5} />
        </div>
        </div>
       
        
        <Footer/>
    </div>
    )
}

export default About