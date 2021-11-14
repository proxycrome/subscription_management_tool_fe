import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {ReactComponent as Success} from '../../Asset/Success-icon.svg'
import { headercolor } from '../../redux/flex/flex.actions';
// import '../ Paymentsuccess/ Paymentsuccess.css'
import '../Paymentsuccess/Paymentsuccess.css'

function  Paymentsuccess(){
    const history=useHistory()
    // useEffect(()=>{
    //     headercolor({ dashinvitecolor:"purple"})
                    
       
    //  },[])
return(
    
        <div className="paymentsuccess">

            <div className="payment-inner">

              <Success/>
               <h3>PAYMENT SUCCESSFUL</h3>
               <Link to="/Dashboard" className="return-home">BACK TO HOME</Link>
               
            </div>
        </div>
         
 

)


} 

export default  Paymentsuccess