import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import Dashopen from '../../Components/Dashopen/Dashopen'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa";
import { headercolor } from '../../redux/flex/flex.actions';
import { addarray } from '../../redux/flex/flex.actions'
import Belowbox from '../../Components/Belowbox/Belowbox';
import Gotv from '../../Asset/GOTV.png';
import Dstv from '../../Asset/Dstv.png';
import Startimes from '../../Asset/Startimes.png';
import Boxoffice from '../../Asset/BoxOffice.png';
import Netflix from '../../Asset/Netflix.png';
import Showmax from '../../Asset/Showmax.png';
import Upperbox from '../../Components/Upperbox/Upperbox'
import axios from 'axios'
import '../Newsub/Newsub.css'

function Newsub({presentcolor,headercolor,date,match,subarray,subscription,addarray}){
    let packageFile=[]
    const history=useHistory()
    const[subscriptionval,setSubscriptionval]=useState({})
    const[image,setImage]=useState({val:""})
    const[packageFiles,setPackageFiles]=useState([])
    useEffect(()=>{
        // setSubscriptionval(subscription)
        // let token = JSON.parse(localStorage.getItem('bearertoken'));
        // axios.defaults.headers.common['Authorization'] = token;

        axios.get("https://subscription-management-tool.herokuapp.com/users/category")
    .then(res=>{
      console.log(res)
      console.log(res.data.data[0])
    //   if((JSON.parse(localStorage.getItem('packages')))==null){
        localStorage.setItem('packages', JSON.stringify(res.data.data));
      
    // }
})
    // else{localStorage.setItem('bearertoken', JSON.stringify(token));}
    
    // })
        // https://subscription-management-tool.herokuapp.com/users/subscription
   
    let packagestore=JSON.parse(localStorage.getItem('packages'))
        headercolor({ dashheadercolor:"#6200F0"})
                    
        console.log(match.params.name)
        const names=match.params.name
     if(names=="Gotv"){
        setImage({val:Gotv})
       let packageFileorigin=packagestore[1].products
          console.log(packageFile)
         packageFileorigin.map((val,index)=>{
             packageFile.push(val)
             setPackageFiles(packageFile)
            console.log(packageFile)
         })

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
        let packageFileorigin=packagestore[0].products
          console.log(packageFile)
         packageFileorigin.map((val,index)=>{
             packageFile.push(val)
             setPackageFiles(packageFile)
            console.log(packageFile)
         })
    }
    if(names=="Startimes"){
        setImage({val:Startimes})
    }  
     
   
       
     },[])
     let token=JSON.parse(localStorage.getItem('bearertoken'))
     console.log(token)
     function subscribe(){

        history.push("/Payoption")
     }
     function Addlist(){

        addarray({Amount:subscription.amount,Package:subscription.productName,Renewal:subscription.Renewal,
        Billincycle:subscription.billingCycle,Status:"Inactive",productcategory:"Entertainment",subDat:"",expiryDate:""})
        console.log(subscription)
        console.log(subarray)
            history.push("/dashboard")
     }
     
     
   
    
return(
    <Dashopen dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
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
    <Belowbox icon={image.val} firstbutn={"ADD TO LIST"} firstclick={Addlist} product={packageFiles} secondbutn={"SUBSCRIBE"} secondclick={subscribe}/>

        </div>
         
    </Dashopen>

)


} 
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item)),
     addarray:(item)=>dispatch(addarray(item))
 
 })
const mapstatetoprops=({flex:{presentcolor,customer,subscription,subarray}})=>({
 
    presentcolor,
    customer,
    subscription,
    subarray
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Newsub)