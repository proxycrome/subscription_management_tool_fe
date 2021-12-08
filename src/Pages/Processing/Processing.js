import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../Processing/Processing.css'
function Processing(){
    let history= useHistory()
    useEffect(()=>{
        setTimeout(function(){
            history.push("/walletsuccesspayment")},3000);

    },[])
    return(
        <div className="Processing">
            <h2>Processing</h2>
        </div>
    )

}

export default Processing