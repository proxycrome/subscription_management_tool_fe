import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import Smallbox from '../Smallbox/Smallbox';
import '../Belowbox/Belowbox.css'
import { FaEye } from 'react-icons/fa';

function Belowbox({presentcolor,headercolor,firstbutn,secondbutn,choice,cycle,
firstclick,secondclick,icon}){
    useEffect(()=>{
        headercolor({ dashinvitecolor:"purple"})
                    
       
     },[])
return(
    
        <div className="belowbox">
            <div>
                <div className="belowbox-Header">
                    <h3>Product Category</h3>
                    <h3>ENTERTAINMENT</h3>
                </div>
                <div className="belowbox-inner-all">
                <div className="belowbox-inner">
                    <Smallbox icon={icon}/>
                    <div className="below-categ-div">
                        
                        <div className="below-category-options">
                            <p>Packages</p>
                            <div className="selected-div-below">
          
                <select name="choice" className="select-placeholder-below" id="selectlists-below" >
                <option value="country" >{choice}</option>
                    {/* {answer.map((val,index)=>{
                        return(
                            <option key={index} value={val}>{val}</option>
                        )
                    })} */}
                    

                </select>
           
                </div>
                        </div>
                        <div className="below-category-options">
                        <p>Amount</p>
                        <p>N2500.00</p>
                        </div>
                        <div className="below-category-options">
                        <p>Billing Cycle</p>
                        <div className="selected-div-below">
          
                <select name="cycle" className="select-placeholder-below" id="selectlist-below" >
                <option value="country" >{cycle}</option>
                    {/* {answer.map((val,index)=>{
                        return(
                            <option key={index} value={val}>{val}</option>
                        )
                    })} */}
                    

                </select>
           
                </div>
                        </div>
                        <div className="below-category-options">
                        <p>Auto Renewal</p>
                        <div className="below-enable">
                            <p>Enable</p>
                            <FaEye/>
                        </div>
                        </div>
                    </div>
                    </div>
                <div className="below-butn">
                    <button className="first-belowbutton" onClick={firstclick}>{firstbutn}</button>
                    <button className="second-belowbutton" onClick={secondclick}>{secondbutn}</button>
                </div>
                </div>
               
            </div>

        </div>
         
  

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

export default connect(mapstatetoprops,MapDispatchToProps) (Belowbox)