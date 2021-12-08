import React from 'react'
import Authenticate from '../../Asset/Authenticate.png'
import DashFrame from '../../Components/DashFrame/DashFrame'
import '../Pinverification/Pinverification.css'

function Pinverification(){
  return(
      <DashFrame>
    <div className="Pinverification">
        <h3>Authenticate</h3>
        <div className="image-pin-input">
            <div className="authenticate-image-div"><img src={Authenticate} alt="authenticate"/></div>
            <div className="pin-confirm-and-pin">
                <h3>PIN CONFIRMATION</h3>
                <p>Please provide your 4-digit PIN to confirm payment</p>
                <div className="pin-input-div">
                <input type="number" className="pin-input"/>
                <input type="number" className="pin-input"/>
                <input type="number" className="pin-input"/>
                <input type="number" className="pin-input"/>
                </div>
            </div>
        </div>
        <div>
            <button>CANCEL</button>
            <button>CONFIRM</button>
        </div>
    </div>
    </DashFrame>
  )


}
export default Pinverification