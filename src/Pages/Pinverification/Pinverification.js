import React from 'react'
import Authenticate from '../../Asset/Authenticate.png'
import DashFrame from '../../Components/DashFrame/DashFrame';
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {ReactComponent as Cancel} from '../../Asset/Closesvg.svg'
import '../Pinverification/Pinverification.css'

function Pinverification(){
    const history=useHistory()
    const[firstpin, setFirstpin]=useState()
    const[secondpin, setSecondpin]=useState()
    const[thirdpin, setThirdpin]=useState()
    const[fourthpin, setFourthpin]=useState()
    const[combinedpin,setCombinedpin]=useState()
    const[popupInfo,setPopupInfo]=useState({display:"none"})

    const handleconfirm=( )=>{
      
       let totalVal=firstpin.concat(secondpin).concat(thirdpin).concat(fourthpin)
       setCombinedpin(+totalVal)
       console.log(typeof combinedpin)
       if(combinedpin===1234){
        {history.push("/processing")}
       }
       else{setPopupInfo({display:"flex"})}
    }
  return(
      <DashFrame>
           <div  style={popupInfo} className="check-issue">
                    <div className="cancel-confirm-signup" onClick={(()=>{setPopupInfo({display:"none"}) }) } ><Cancel/></div>
                        <p>Incorrect pin.</p>
                    </div>
    <div className="Pinverification">
        <h3>Authenticate</h3>
        <div className="image-pin-input">
            <div className="authenticate-image-div"><img src={Authenticate} alt="authenticate"/></div>
            <div className="pin-confirm-and-pin">
                <h3>PIN CONFIRMATION</h3>
                <p>Please provide your 4-digit PIN to confirm payment</p>
                <div className="pin-input-div">
                <input type="number" className="pin-input" onChange={((e)=>{setFirstpin(e.target.value)})}/>
                <input type="number" className="pin-input"onChange={((e)=>{setSecondpin(e.target.value)})}/>
                <input type="number" className="pin-input"onChange={((e)=>{setThirdpin(e.target.value)})}/>
                <input type="number" className="pin-input"onChange={((e)=>{setFourthpin(e.target.value)})}/>
                </div>
            </div>
        </div>
        <div className="pinverification-button">
            <button className="cancel-action">CANCEL</button>
            <button className="confirm-action" onClick={handleconfirm}>CONFIRM</button>
        </div>
    </div>
    </DashFrame>
  )


}
export default Pinverification