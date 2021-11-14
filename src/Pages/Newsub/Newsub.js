import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import Dashopen from '../../Components/Dashopen/Dashopen'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa";
import { headercolor } from '../../redux/flex/flex.actions';
import Belowbox from '../../Components/Belowbox/Belowbox';
import Gotv from '../../Asset/GOTV.png';
import Dstv from '../../Asset/Dstv.png';
import Startimes from '../../Asset/Startimes.png';
import Boxoffice from '../../Asset/BoxOffice.png';
import Netflix from '../../Asset/Netflix.png';
import Showmax from '../../Asset/Showmax.png';
import Upperbox from '../../Components/Upperbox/Upperbox'
import '../Newsub/Newsub.css'

function Newsub({presentcolor,headercolor,date,match}){
    const history=useHistory()
    const[image,setImage]=useState({val:""})
    useEffect(()=>{
        headercolor({ dashsubscribecolor:"#6200F0"})
                    
        console.log(match.params.name)
        const names=match.params.name
     if(names=="Gotv"){
        setImage({val:Gotv})
    }
    if(names=="Netflix"){
        setImage({val:Netflix})
    }
    if(names=="Showmax"){
        setImage({val:Showmax})
    }
    if(names=="Boxoffice"){
        setImage({val:Boxoffice})
    }
    if(names=="Dstv"){
        setImage({val:Dstv})
    }
    if(names=="Startimes"){
        setImage({val:Startimes})
    }  
     
    
       
     },[])
     function subscribe(){

        history.push("/Payoption")
     }
     
     
   
    
return(
    <Dashopen dashsubscribestyle={{backgroundColor:presentcolor.dashsubscribecolor}}>
        <div className="newsubContainer">
        {/* <div className="upperboX">
            <div className="Upperleft">
                
               <div className="upperleftCOntent">
                   <h2>CUSTOMER INFORMATION</h2>
                   <hr/>
                   <p>Account ID:20210801</p>
                   <h3>Customer Name:Judith Newman</h3>
                   <div className="upperleft-and-icon"><FaEye/><p>08032321123</p></div>
                   <div className="upperleft-and-icon"><FaEye/><p>Judithnewman@gmail.com</p></div>
               </div>
            </div>
            <div className="Upperright-newsub">
           
                <div className="cardImage">
                   
                  <div className="cardImage-acc">
                      <p>Account Id</p>
                      <p>20210801</p>
                  </div>
                    <div className="cardImage-balance">
                        <p>E-wallet Balance</p>
                        <p>NGN 134,457.56</p>
                    </div>
                </div>
                <button>FUND WALLET</button>
            </div>
        </div> */}
        <Upperbox/>
        
        {/* {`${props.match.url}/15`} */}
    <Belowbox icon={image.val} firstbutn={"ADD TO LIST"} secondbutn={"SUBSCRIBE"} secondclick={subscribe}/>

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

export default connect(mapstatetoprops,MapDispatchToProps) (Newsub)