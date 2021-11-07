import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import '../Subscription/Subscription.css'

function Subscription({presentcolor,headercolor}){
    useEffect(()=>{
        headercolor({ dashsubscribecolor:"purple"})
                    
       
     },[])
     return(
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
                     <div>
                         <p></p>
                         <p></p>
                     </div>
                     <div></div>
                 </div>
                           
                        </div>
                        </div>
                </div>
                <div></div>

         
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

export default connect(mapstatetoprops,MapDispatchToProps) (Subscription)