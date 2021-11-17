import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import {ReactComponent as Hug} from '../../Asset/hug.svg'
import '../LogoutReal/LogoutReal.css'

function LogoutReal(){
    // useEffect(()=>{
    //     headercolor({ dashinvitecolor:"purple"})
                    
       
    //  },[])
return(
    
        <div className="logout-real">

            <div className="logout-inner-real">
                <Hug className="hug"/>

               <p>Hi, Judith we are always here to serve you</p> 
               <h3>Thank you for your feedback</h3>
               
            </div>
        </div>
         
 

)


} 

export default  LogoutReal