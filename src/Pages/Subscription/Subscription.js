import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';

function Subscription({presentcolor,headercolor}){
    useEffect(()=>{
        headercolor({ dashsubscribecolor:"purple"})
                    
       
     },[])
     return(
        <DashFrame dashsubscribestyle={{backgroundColor:presentcolor.dashsubscribecolor}}>

         
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