import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa";
import { headercolor } from '../../redux/flex/flex.actions';
import Belowbox from '../../Components/Belowbox/Belowbox';
import '../Newsub/Newsub.css'

function Newsub({presentcolor,headercolor}){
    useEffect(()=>{
        headercolor({ dashsubscribecolor:"purple"})
                    
       
     },[])
return(
    <DashFrame dashsubscribestyle={{backgroundColor:presentcolor.dashsubscribecolor}}>
        <div>
        <div className="upperboX">
            <div className="Upperleft">
                
               <div className="upperleftCOntent">
                   <h2>CUSTOMER INFORMATION</h2>
                   <hr/>
                   <p>Account ID:20210801</p>
                   <h3>Customer Name:Judith Newman</h3>
                   <div className="upperleft-and-icon"><FaEye/><p>08032321123</p></div>
                   <div className="upperleft-and-icon"><FaEye/><p>Judithnewman@gmail.com</p></div>
               </div>
            </div>
            <div className="Upperright-newsub">
           
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
                <button>FUND WALLET</button>
            </div>
        </div>
    <Belowbox firstbutn={"ADD TO LIST"} secondbutn={"SUBSCRIBE"}/>

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

export default connect(mapstatetoprops,MapDispatchToProps) (Newsub)