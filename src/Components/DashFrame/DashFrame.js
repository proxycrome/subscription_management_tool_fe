import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../DashFrame/DashFrame.css'

function DashFrame({children,dashheaderstyle,dashinvitestyle,dashsubscribestyle}){
    const history=useHistory()
    return(
        <div className="dashboard">
            <div className="dashboard-inner">
                <div className="dashboard-left">
                    <div>
                    <FlexLogo className="dashboard-logo" />
                    </div>
                    <div className="list">
                        <div onClick={(()=>{history.push("/dashboard")})} style={dashheaderstyle} className="inner-list">
                            <div className="dash-icon"><FaEye/></div>
                            <div>Home</div>
                            </div>
                            <div onClick={(()=>{history.push("/subscription")})} style={dashsubscribestyle} className="inner-list">
                            <div className="dash-icon"><FaEye/></div>
                            <div >Subscription</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><FaEye/></div>
                            <div>Payments</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><FaEye/></div>
                            <div>Settings</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><FaEye/></div>
                            <div>Support</div>
                            </div>
                            <div onClick={(()=>{history.push("/invite")})} style={dashinvitestyle}  className="inner-list">
                            <div className="dash-icon"><FaEye/></div>
                            <div>Invite a friend</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><FaEye/></div>
                            <div>Logout</div>
                            </div>

                        
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="dash-upper">
                        <div className="dash-upper-left">
                            <div className="first">IMAGE</div>
                            <div>Hi,Judith</div>
                        </div>
                        <div className="dash-upper-right">
                            <div className="firsts"><FaEye/></div>
                            <div className="divider"></div>
                            <div className="second"><FaEye/></div>
                        </div>
                        </div>
                        <div>{children}</div>
                        
                        </div>
            </div>
        </div>
    )

}
const mapstatetoprops=({flex:{presentcolor}})=>({
 
    presentcolor
   
   

})

export default connect (mapstatetoprops) (DashFrame)