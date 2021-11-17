import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import Upperbox from '../../Components/Upperbox/Upperbox';
import Belowbox from '../../Components/Belowbox/Belowbox';
import Dashopen from '../../Components/Dashopen/Dashopen';
import axios from 'axios';
import '../Addsub/Addsub.css'
import { getDefaultNormalizer } from '@testing-library/dom';

function Addsub({presentcolor,headercolor}){
    useEffect(()=>{
        headercolor({ dashsubscribecolor:"#6200f0"})
                    
       
     },[])
     const add=(()=>{
       alert('add')
         const params={
            billersCode:1212121212,
             serviceID:"gotv",
            // headers:{"Authorization":"re@gmail.com:th96"}
        }
        // console.log(params)
        // console.log('hik')
        
    //    fetch("https://phonebook-nakov.firebaseio.com/phonebook.json",
    //    fetch("https://sandbox.vtpass.com/api/merchant-verify?"username:6",
    //    {method: 'POST',
    // body:JSON.stringify(params)})
    //    .then((resp) => resp.json())
    //     .then((resp) =>{
    //         console.log(resp)
    //     })

//          axios.post("https://sandbox.vtpass.com/api/merchant-verify", params)
//    .then(res=>{
//      console.log(res)})

     })

     
return(
    <Dashopen dashsubscribestyle={{backgroundColor:presentcolor.dashsubscribecolor}}>
        <div>
            <div className="addsubb">
                <Upperbox/>
                <Belowbox firstbutn={"DISCARD"} secondbutn={"SUBSCRIBE"} choice={""} cycle={""}
                firstclick={add} product={[{amount:"10"}]}/>
            </div>
        </div>
         
    </Dashopen>

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

export default connect(mapstatetoprops,MapDispatchToProps) (Addsub)