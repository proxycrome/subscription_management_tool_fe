import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import LineChart from '../../Components/Linegraph/Linegraph';
import { Line } from 'react-chartjs-2';
import {ReactComponent as PlusLogo} from '../../Asset/Plus.svg'
import DashFrame from '../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { headercolor } from '../../redux/flex/flex.actions';
import MobileDash from '../../Components/MobileDash/MobileDash';


import Mobilecard from '../../Components/Mobilecard/Mobilecard';
import '../Dashboard/Dashboard.css'

function Dashboard({presentcolor,headercolor,}){
    const history=useHistory()
    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200F0"})
                    
       
     },[])
     console.log(presentcolor.dashheadercolor)
    return(
            <div className="dashtotal">
                <div className="webDashboard">
                        <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
                           
                        <div className="inner-body-dashboard">
                        <div className="second-line-dashboard">
                            <h2>WELCOME TO FLEX</h2>
                            <input type="search" placeholder="Search for products"/>
                        </div>
                        {/* <hr className="welcome-dividers"/> */}
                        <div className="third-line-dashboard">
                          
                            <div className="third-line-dashboard-upper"><h3>Overview</h3></div>
                            <div className="third-line-dashboard-inner">
                                <div className="third-line-dashboard-content">
                                    <div className="account-and-line">
                            <div className="acc-summ"><p>Account summary</p></div>
                            <div className="account-line"></div>
                            </div>
                            <p onClick={(()=>{history.push("/Product")})} className="dashproduct">Products</p>
                            </div>
                            <button className="dash-add-button" onClick={(()=>{history.push("/productcategory")})}> <PlusLogo/> <p> ADD SUBSCRIPTION</p></button>
                            </div>
                            {/* <hr className="welcome-divider"/> */}
                            <div className="fourth-line-dashboard-inner">
                                <div className="fourth-line-left">
                                    <div className="fourth-line-left-content">
                                    <div><p className="subOverview">Subscription overview</p></div>
                                    <div >
                                        <button className="first-graph-button">MONTHLY</button>
                                        <button className="second-graph-button">YEARLY</button>
                                    </div>
                                    <div className="linechart"><LineChart/></div>
                                    </div>
                                </div>
                                <div className="fourth-line-right">
                                    <button>FUND WALLET</button>
                                    <div>
                                        <div className="wallet">
                                            <div className="wallet-upper">
                                                <p className="regular-weight-dash">Account Id</p>
                                                <p className="medium-weight-dashboard">20210801</p>
                                            </div>
                                            <div className="wallets-lower">
                                                <div><p className="medium-weight-dashboard">E-wallet Balance</p></div>
                                                <div><p className="money-dashboard">NGN 134,457.56</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="inner-half-dashboard">

                        <p className="recent-sub-dashboard">Recent Subscriptions</p>
                        <div className="inner-half-header">
                          
                           
                           
                                <p>Products</p>
                                <p>Product category</p>
                                <p>Expiry Date</p>
                                <p>Status</p>
                                <p></p>
                                <p></p>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                           
                        </div>
                        </DashFrame>
                        </div>
                        <div className="mobile-dashboard-All">
                            <MobileDash/>
                <div className="mobile-dashboard">
                      
                            <h2>WELCOME TO FLEX</h2>
                            <input type="search" placeholder="Search"/>
                            <div>
                            <div  className="inner-mobile-dashboard">
                                <div className="view-and-button">
                                    <h3>Overview</h3>
                                    <button>ADD SUBSCRIPTION</button>
                                </div>
                                <div className="mobile-categ">
                                    <span className="mobile-acc-line">
                                    <p>Account summary</p>
                                    <hr/>
                                    </span>
                                   
                                    <p>Products</p>
                                </div>
                                <div className="mobilecard-in-Dashboard"><Mobilecard/></div>
                               
                            </div>
                            <div className="mobile-graph-dashboard">
                                graph
                            </div>
                            <div className="mobile-second-inner">
                                <h3>Recent subscriptions</h3>
                                <div className="tableData">
                                    <p className="mobile-list-table">Products</p>
                                    <p className="mobile-list-table">Products category</p>
                                    <p className="mobile-list-table">Expiry Date</p>
                                    <p className="mobile-list-table">Status</p>
                                    <p></p>
                                    
                                </div>
                            </div>
                            
                            </div>
                            </div>
                        </div>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Dashboard)