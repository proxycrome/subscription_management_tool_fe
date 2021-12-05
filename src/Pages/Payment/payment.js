import React, {useRef, useState} from 'react'
import axios from 'axios';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import {Link, useParams, useHistory} from 'react-router-dom'
import DashFrame from '../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux';
import {useEffect} from 'react';
import { headercolor, updatedetails } from '../../redux/flex/flex.actions';
import './payment.css'
import call from '../../Asset/Call Icon.png';
import Mail from '../../Asset/Mail icon.png';
// import '../../Components/Upperbox/Upperbox.css';

const Pmt = ({presentcolor,headercolor, updatedetails, detailsupdate}) => {
    const history = useHistory();
   
    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"}) 

    },[]);


    let customerDetail=JSON.parse(localStorage.getItem('customerDetail'))
    return (
        <>
            <DashFrame dashPaymentStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section">
                    <div className="pmt-header">
                        <h3>Payments</h3>
                        <input type="search"  placeholder="Search for products"/>
                    </div>
                    <hr className="welcome-divider"/>
                    <div className="pmt-links">
                        <div className="pmt-sub-header">
                            <Link to="/payment/funding-history" style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p>Funding history</p></Link>
                            <Link to="#"><p>Payment setup</p></Link>
                        </div>
                        <select className="filter-trans">
                            <option>Filter transaction</option>
                        </select>
                    </div>
                    <div className="inner-sec">  
                    <div className="payments-form">
                            <div className="pay-layer">
                                <div className="pay-options">
                                    <div className="upperleftCOntent">
                                        <h2>CUSTOMER INFORMATION</h2>
                                        <hr className="customer-info-line"/>
                                        <p className="accountId-upperbox">Account ID: 20210801</p>
                                        <h3>Customer Name: {customerDetail.firstName} {customerDetail.lastName}</h3>
                                        <div className="upperleft-and-icon" 
                                        style={customerDetail.phone==="" ? {display:"none"}:{display:"flex"}}><img src={call}/><p>{customerDetail.phone}</p></div>
                                        <div className="upperleft-and-icon"><img src={Mail}/><p>{customerDetail.email}</p></div>
                                    </div>
                                </div>

                                <div className="card-layer">
                                    <div className="cardImg">
                                        <div className="cardImage-acc" style={{color: "white"}}>
                                            <p>Account Id</p>
                                            <p className="medium-weight-dashboard-upp">20210801</p>
                                        </div>
                                        <div className="cardImage-balance">
                                            <p className="medium-weight-dashboard">E-wallet Balance</p>
                                            <p className="money-dashboard-upp">NGN 0.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="fund-hist-section">  
                        <div className="fund-hist-header">
                            <h3> Funding history</h3>
                            <div className="fund-hist-box">
                                <h4> My E-wallet</h4>
                                <h5>Transaction</h5>
                            </div>
                        </div>
                       
                    </div>


                    
                </div>    
            </DashFrame> 
        </>
    )
}

const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
     updatedetails:(item)=>dispatch(updatedetails(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor, detailsupdate}})=>({
 
    presentcolor,
    detailsupdate
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Pmt)

