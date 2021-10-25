import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import {useHistory} from 'react-router-dom'

import '../Homepage/Homepage.css'
import Footer from '../../Components/Footer/Footer'

function Homepage(){
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
       
        <div className="Homebody">
        <Navbar/>

        <div className="Bodyinner">
            <div >
                <div className="Innercontent">
                <div className="contents">
                    <h2>Subscription Management Made Easy!</h2>
                    <p>Flex is a subscription management platform that allows you to manage multiple
                        subsription plans. It gives you the freedom to control and keep track of your
                        expenses </p>
                        <div className="buttons">

                        
                        <button onClick={(()=>{history.push("/signup")})}>REGISTER</button>
                        <button onClick={(()=>{history.push("/signin")})}>LOGIN</button>
                        </div>
                </div>
                <div>IMAGE</div>
                </div>
                <div className="Innercontent">
                <div>IMAGE</div>
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
                <div>IMAGE</div>
                </div>
                
               
                
                <div className="Innercontent">
                <div className="Image">IMAGE</div>
                <div className="contents">
                    <h2>Our Partners</h2>
                    <p>We build trust and confidence with our partners by being one of the first brands to create a well secured payment
                        platform with some of the best companies recognized globally </p>
                        
                       

                        <button className="buttons-partner">Become a partner</button>
                       
                       
                </div>
               
                </div>
                <div className="love">

                    <h2>Love from customers</h2>
                    <p>We share common trends and strategies for improving your rental income and making sure 
                        you stay in high demand</p>
                </div>
                <div className="blog">
                    <button>OUR BLOG</button>
                    <h3>Don't miss out recent articles</h3>
                    <p>We share common trends and strategies for improving your rental income and making sure 
                        you stay in high demand</p>
                </div>
                 
               
                
            </div>
           
        </div>




        </div>
        <Footer/>
    </div>
)


}

export default Homepage