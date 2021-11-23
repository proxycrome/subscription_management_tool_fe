import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import Dashopen from '../../Components/Dashopen/Dashopen'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import { headercolor } from '../../redux/flex/flex.actions';
import {ReactComponent as Rectangle} from '../../Asset/Rectangle-option.svg'
import {ReactComponent as Paycard} from '../../Asset/PayCard.svg'
import {ReactComponent as Paywallet} from '../../Asset/Paywallet.svg'
import '../Payoption/Payoption.css'

function Payoption({presentcolor,headercolor}){
    const history=useHistory()
    const[click,setClick]=useState(false)
    const[butnborder,setButnborder]=useState({})
    const[chosen,setChosen]=useState("")
    const[butnbordersecond,setButnbordersecond]=useState({})
    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"})
                    
       
     },[])
return(
    <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
        <div className="paymentoption">
            <div>
                <div className="header-payment">
                <h3>PAYMENT METHOD </h3>
                </div>
                <div className="payment-inner-content">
                    <p>Please select your preffered payment option</p>
                    <div className="image-and-option-payment">
                        <div><Rectangle/></div>
                     
                        <div className="payment-option-buttons">
                            <button style={butnborder} onClick={(()=>{
                        if(click==false){setClick(true)
                        ;setButnborder({border:"1px solid #6200f0"})
                        setChosen("card")
                        }})}><Paycard className="payment-option-icon"/>PAY WITH CARD</button>
                            <button style={butnbordersecond} onClick={(()=>{
                        if(click==false){
                            setButnbordersecond({border:"1px solid #6200f0x"})
                            setClick(true) 
                            setChosen("wallet")
                            
                            }})}><Paywallet className="payment-option-icon"/>PAY WITH E-WALLET</button>
                        </div>
                        
                    </div>
                    <div className="payment-select-buttons">
                            <button onClick={history.goBack} className="cancel-payment">CANCEL</button>
                            <button onClick={(()=>{if(chosen=="card"){history.push("/paymentcard")}})} className="proceed-payment">PROCEED</button>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Payoption)