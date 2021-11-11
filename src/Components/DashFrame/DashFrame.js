import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook,FaUserAlt} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import notification from '../../Asset/Notification.png'
import newsfeed from '../../Asset/Newsfeed.png'
import invite from '../../Asset/Invite.png'
import subscription from '../../Asset/Subscription.png'
import home from '../../Asset/Home.png'
import logout from '../../Asset/Logout.png'
import support from '../../Asset/Support.png'
import payment from '../../Asset/Payment.png'
import settings from '../../Asset/Settings.png'
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
                            <div className="dash-icon"><img src={home}/></div>
                            <p>Home</p>
                            </div>
                            <div onClick={(()=>{history.push("/subscription")})} style={dashsubscribestyle} className="inner-list">
                            <div className="dash-icon"><img src={subscription}/></div>
                            <div >Subscription</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><img src={payment}/></div>
                            <div>Payments</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><img src={settings}/></div>
                            <div>Settings</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><img src={support}/></div>
                            <div>Support</div>
                            </div>
                            <div onClick={(()=>{history.push("/invite")})} style={dashinvitestyle}  className="inner-list">
                            <div className="dash-icon"><img src={invite}/></div>
                            <div>Invite a friend</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><img src={logout}/></div>
                            <div>Logout</div>
                            </div>
                           
                        
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="dash-upper">
                        <div className="dash-upper-left">
                            <div className="first"><div className="profile-image-dash"><FaUserAlt className="userpix-dash"/></div></div>
                            <div>Hi,Judith</div>
                        </div>
                        <div className="dash-upper-right">
                            <div className="firsts"><img src={newsfeed}/></div>
                            <div className="divider"></div>
                            <div className="second"><img src={notification}/></div>
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