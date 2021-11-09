import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import MobileDash from '../../Components/MobileDash/MobileDash';
import Mobilecard from '../../Components/Mobilecard/Mobilecard'
import '../Subscription/Subscription.css'

function Subscription({presentcolor,headercolor}){
    useEffect(()=>{
        headercolor({ dashsubscribecolor:"#6200F0"})
                    
       
     },[])
     return(
         <div>
         <div className="subscribewebscreen">
        <DashFrame dashsubscribestyle={{backgroundColor:presentcolor.dashsubscribecolor}}>
                <div className="subSCRiption">
                    <div className="subscribeUpper">
                        <h3>Subscription</h3>
                        <input type="search"/>
                    </div>
                    <div className="mysubsribe-and-button" >
                        <p className="mySubscription">My Subscription</p>
                        <button>ADD</button>
                        </div>
                        <div className="sub-below">
                        <div className="pie-subdcribe">
                            <div className="pieInner">
                            PIE
                            </div>
                        </div>
                        <div className="card-and-activity">
                            <div className="card-in-subscribe">
                            <div className="cardImage">
                   
                   <div className="cardImage-acc">
                       <p>Account Id</p>
                       <p>20210801</p>
                   </div>
                     <div className="cardImage-balance">
                         <p>E-wallet Balance</p>
                         <p>NGN 134,457.56</p>
                     </div>
                 </div>
                    </div>
                 <div className="activity-subscribe">
                     <div className="activity-subscribe-header">
                         <p>Your activity</p>
                         <p>Last subscription:30th October 2021</p>
                     </div>
                     <div className="subscription-circle-and-text-div">
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                     </div>
                 </div>
                           
                        </div>
                        </div>
                        <hr className="sub-divider-line"/>
                        <div className="sub-below-second">
                            <h3>All Subscriptions</h3>
                            <td>
                                <th>Products</th>
                                <th>Date Subscribed</th>
                                <th>Expiry date</th>
                                <th>Auto renewal</th>
                                <th>Status</th>
                                <th>Billing cycle</th>
                                <th></th>
                            </td>
                        </div>
                </div>
                <div></div>

         
        </DashFrame>
        </div>
        <div className="subscribemobilescreen">
            <MobileDash/>
            <h3 className="sub-mobile-header">Subscriptions</h3>
            <input type="search" placeholder="Search for products"/>
            <div className="subscribemobilescreen-inner">
            <div className="subscribemobilescreen-second">
                <p>My Subscriptions</p>
                <button>ADD SUBSCRIPTION</button>

            </div>
            <div className="sub-mobile-card">
                <Mobilecard/>
            </div>
            </div>
            <div>
                PIE
            </div>
            {/* <div> */}
            <div className="activity-subscribe">
                     <div className="activity-subscribe-header">
                         <p>Your activity</p>
                         <p>Last subscription:30th October 2021</p>
                     </div>
                     <div className="subscription-circle-and-text-div">
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                     </div>
                 </div>
                 {/* </div> */}
            <div></div>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Subscription)