import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import DashFrame from '../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import '../Dashboard/Dashboard.css'

function Dashboard({presentcolor,headercolor}){
    useEffect(()=>{
        headercolor({ dashheadercolor:"purple"})
                    
       
     },[])
     console.log(presentcolor.dashheadercolor)
    return(
        
                        <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
                           
                        <div className="inner-body-dashboard">
                        <div className="second-line-dashboard">
                            <h2>WELCOME TO FLEX</h2>
                            <input type="search"/>
                        </div>
                        <hr className="welcome-divider"/>
                        <div className="third-line-dashboard">
                            <div className="third-line-dashboard-upper"><h3>Overview</h3></div>
                            <div className="third-line-dashboard-inner">
                                <div className="third-line-dashboard-content">
                                    <div className="account-and-line">
                            <div className="acc-summ"><p>Account summary</p></div>
                            <div className="account-line"></div>
                            </div>
                            <p>Products</p>
                            </div>
                            <button>ADD SUBSCRIPTION</button>
                            </div>
                            <hr className="welcome-divider"/>
                            <div className="fourth-line-dashboard-inner">
                                <div className="fourth-line-left">
                                    <div className="fourth-line-left-content">
                                    <div><p>Subscription overview</p></div>
                                    <div >
                                        <button>MONTHLY</button>
                                        <button>YEARLY</button>
                                    </div>
                                    <div>Graph</div>
                                    </div>
                                </div>
                                <div className="fourth-line-right">
                                    <button>FUND WALLET</button>
                                    <div>
                                        <div className="wallet">
                                            <div className="wallet-upper">
                                                <p>Account id</p>
                                                <p>20210801</p>
                                            </div>
                                            <div className="wallet-lower">
                                                <div><p>E-wallet Balance</p></div>
                                                <div><p>NGN 134,457.56</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="inner-half-dashboard">

                        <p>Recent Subscriptions</p>
                        <div className="inner-half-header">
                          
                           
                           
                                <p>Products</p>
                                <p>Product category</p>
                                <p>Expiry Date</p>
                                <p>Status</p>
                                <p></p>
                            </div>
                           
                        </div>
                        </DashFrame>
                        
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

export default connect(mapstatetoprops,MapDispatchToProps) (Dashboard)