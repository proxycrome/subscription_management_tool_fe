import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import Dashopen from '../../Components/Dashopen/Dashopen'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { headercolor } from '../../redux/flex/flex.actions';
import {ReactComponent as Rectangle} from '../../Asset/Rectangle-option.svg'
import {ReactComponent as Paycard} from '../../Asset/PayCard.svg'
import {ReactComponent as Paywallet} from '../../Asset/Paywallet.svg'
import {ReactComponent as Flutterwave} from '../../Asset/Flutterwave.svg'
import {ReactComponent as Flutterwaves} from '../../Asset/Flutterwavess.svg'
import Icon from '../../Components/Image/Image'
import {ReactComponent as Paystack} from '../../Asset/paystack.svg'
import '../Paymentcard/Paymentcard.css'

function Paymentcard({presentcolor,headercolor}){
    const history=useHistory()
    useEffect(()=>{
        headercolor({ paymentcolor:"#6200f0"})
                    
       
     },[])
return(
    <DashFrame paymentstyle={{backgroundColor:presentcolor.paymentcolor}}>
        <div className="paymentoption">
            <div>
                <div className="header-payment">
                <h3>PAYMENT METHOD </h3>
                </div>
                <div className="payment-inner-content">
                   
                    <div className="image-and-option-card-payment">
                        <div><Rectangle/></div>
                        <div className="payment-INNER-right">
                          
                        <p>Please select your preffered payment platform</p>
                        <div className="payment-option-card-buttons">
                            <button><Flutterwave className="payment-option-card-icon"/></button>
                            <button></button>
                        </div>
                        </div>
                    </div>
                    <div className="payment-select-buttons">
                            <button className="cancel-payment">CANCEL</button>
                            <button className="proceed-payment">CONTINUE</button>
                        </div>
               </div>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Paymentcard)