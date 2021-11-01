import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import '../Invite/Invite.css'

function Invite({presentcolor,headercolor}){
    useEffect(()=>{
        headercolor({ dashinvitecolor:"purple"})
                    
       
     },[])
return(
    <DashFrame dashinvitestyle={{backgroundColor:presentcolor.dashinvitecolor}}>

         
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

export default connect(mapstatetoprops,MapDispatchToProps) (Invite)