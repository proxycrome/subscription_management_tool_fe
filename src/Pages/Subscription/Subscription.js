import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import PieChart from '../../Components/Pie/Pie'
import { headercolor } from '../../redux/flex/flex.actions';
import MobileDash from '../../Components/MobileDash/MobileDash';
import Mobilecard from '../../Components/Mobilecard/Mobilecard'
import {ReactComponent as PlusLogo} from '../../Asset/Plus.svg'
import Bin from '../../Asset/dustbin.png'

import Smallestbox from '../../Components/Smallestbox/Smallestbox'
import axios from 'axios'
import '../Subscription/Subscription.css'
import { useHistory } from 'react-router-dom';

function Subscription({presentcolor,headercolor,subarray}){
    console.log(subarray)
    const[dated,setDated]=useState("")
    const history =useHistory()

    const[expiredval,setExpiredval]=useState(0)
    const[activ,setActiv]=useState(0)
    const[inactiv,setInactiv]=useState(0)
    const[expired,setExpired]=useState(0)
    const[total,setTotal]=useState(0)
    const[image,setImage]=useState({val:""})
    const[arr,setArr]=useState([])
    const[ansDate,setAnsDate]=useState("")
    const[itemColor,setItemColor]=useState({color:""})
    const[valname,setValname]=useState("")
    const[contentReal,setContentReal]=useState("")
    const[idSub,setIdSub]=useState([])
    const[itemId,setItemId]=useState("")
    const[namearr,setNamearr]=useState([])
    const[idReal,setIdReal]=useState("")
    const[dateval,setDateval]=useState("")
    let itemArray=[]
    let userDisplay=[]
    let pname=""
     let cat=""
     let cats=""
     let stat
     let date;
     //let expire=""
     let itemAmt=""
     let itemStatus=""
     let catg=""
     let itemExp=""
     let itemImg=""
     let product=""
     let descr=""
     let innercont=""
    let content;
    let catId=""
    let clientItem=""
    let dateSubscribed;
   let billingcycle=""
   let Total=0
   let inactive=0
   let active=0
   let expiredsub=0
   let dates;
   let ans=""

    

    useEffect(()=>{
        headercolor({ dashsubscribecolor:"#6200F0"})
        //month
        var today = new Date();
   let todays=today
   setDateval(today)
   var daten = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   let month=today.toLocaleString('default',{month:'long'})
   let year=today.getFullYear()
    ans=month+" "+year
    setAnsDate(ans)
   console.log(year)

        //sub
        let token = JSON.parse(localStorage.getItem('bearertoken'));
        axios.defaults.headers.common['Authorization'] = token; 
     //location.reload()
  //    
 
      //   let token = JSON.parse(localStorage.getItem('bearertoken'));
      //   axios.defaults.headers.common['Authorization'] = token;

        axios.get("https://subscription-management-tool.herokuapp.com/users/subscription")
    .then(res=>{
      console.log(res.data.data)
      itemArray=res.data.data
      localStorage.setItem('userDisplay', JSON.stringify(itemArray))
     setArr(itemArray)
      console.log(itemArray)
      content=itemArray.map((val)=>{
          catId=val._id
          cats=val.subCategory
          catg=val.category
          itemAmt=val.amount
          itemImg=val.productImg
          itemExp=val.dateExpired
          itemStatus=val.subscriptionStatus
          billingcycle=val.billingCycle
          dateSubscribed=val.dateSubscribed
          console.log(cats +"" + catg+""+itemImg)
          setItemId(catId)
          console.log(itemExp)
          console.log(billingcycle);
          console.log(arr)
    //       if(itemStatus=="Active"){
    //         alert('active')
    //       setItemColor({color:"#17AD37"})
    //   } 
     // if(itemStatus=="Expired"){
      //    alert("ex")
      //    setItemColor({color:"red"})
      // }
          if(itemStatus=="Inactive"){
            inactive=inactive+1
            console.log(inactive)
           
          }
          if(itemStatus=="Active"){
            active=active+1
            setActiv(activ+1)
          }
          if(itemStatus=="Expired"){
            expiredsub=expiredsub+1
            setExpiredval(expired+1)
          }
          setInactiv(inactive)
          console.log(inactiv)
          localStorage.setItem('Inactiv', JSON.stringify(inactiv))
          setActiv(active)
          console.log(activ)
          localStorage.setItem('Inactiv', JSON.stringify(activ))
          setTotal(inactive+active+expiredsub)

           
        })

        
    })
    // if(itemStatus=="Active"){
    //     setItemColor({color:"#17AD37"})
    //     setItemColor({color:"red"})
    // } 
    // if(itemStatus=="Inactive"){
    //     setItemColor({color:"rgba(3,6,64,30%"})
       
    // }
    // if(itemStatus=="Expired"){
    //     alert("ex")
    //     setItemColor({color:"#E40C0C"})
    //     setItemColor({color:"red"})
    // }
    // if(itemStatus=="Inactive"){
    //     //inactive=inactive+1
    //     alert('hi')
    //     setInactiv(inactive)
    //     console.log(inactive)
      
    // }
//     if(itemStatus=="Active"){
//       //active=active+1
//       setActiv(activ+1)
//         console.log(activ)
//         localStorage.setItem('activ', JSON.stringify(activ))
//   } 
    console.log(inactiv)
      dates=  JSON.parse(localStorage.getItem('date'));
    console.log(dates)
    if(dates!=null){
    setDated(dates.split("T")[0])
    userDisplay = JSON.parse(localStorage.getItem('userDisplay')); 
    setNamearr(userDisplay) 
}
       
     },[])
     console.log(arr) 
     function Inactivey(val,index){
        console.log(val)
        console.log(index)
       //  if(val.subCategory=="Gotv")
       //  { setProductId("")}
       namearr.map((item,indx)=>{
           console.log(indx)
       if(indx==index){
           console.log(item._id)
           clientItem=item._id
           localStorage.setItem('clientIds', JSON.stringify(item._id))
           history.push(`/Addsub/${val.subCategory}`)
          
       }
       
   })
       
    }
    
    function Active(val,index){
      
       //console.log(indx)
       namearr.map((item,indx)=>{
       if(indx==index){
           console.log(item._id)
           clientItem=item._id
           localStorage.setItem('clientIds', JSON.stringify(item._id))
           localStorage.setItem('detailedInfos', JSON.stringify({amount:val.amount,name:val.product,image:val.productImg,renew:val.autoRenew,billincycle:val.billingCycle}))
           history.push("/Autochange")
          
       }
    })
       //setItemColor({color:"#17A3D7"})
       //console.log(val.productImg)
       //localStorage.setItem('clientIds', JSON.stringify(item._id))
       //localStorage.setItem('detailedInfos', JSON.stringify({amount:val.amount,name:val.product,image:productImg,renew:val.autoRenew,billincycle:val.billingCycle}))
   }
   function Expired(val,index){
      
    //console.log(indx)
    namearr.map((item,indx)=>{
    if(indx==index){
        console.log(item._id)
        clientItem=item._id
        localStorage.setItem('clientIds', JSON.stringify(item._id))
        localStorage.setItem('detailedInfos', JSON.stringify({amount:val.amount,name:val.product,image:val.productImg,renew:val.autoRenew,billincycle:val.billingCycle}))
        history.push(`/Renew/${val.subCategory}`)
       
    }
 })
    //setItemColor({color:"#17A3D7"})
    //console.log(val.productImg)
    //localStorage.setItem('clientIds', JSON.stringify(item._id))
    //localStorage.setItem('detailedInfos', JSON.stringify({amount:val.amount,name:val.product,image:productImg,renew:val.autoRenew,billincycle:val.billingCycle}))
}
   function handledelete(index){
       console.log(index)
       namearr.map((item,indx)=>{

           if(indx==index){
           console.log(item._id)
           let stat=item.subscriptionStatus
           console.log(item.subscriptionStatus)
           clientItem=item._id
           history.push(`/delete/${clientItem+" "+stat}`)
       }
        })

   }
   

   //console.log(today.split(" ")[1] + " " + today.split(" ")[2] + " "+ today.split(" ")[3] )
     return(
         <div>
         <div className="subscribewebscreen">
        <DashFrame dashsubscribestyle={{backgroundColor:presentcolor.dashsubscribecolor}}>
                <div className="subSCRiption">
                    <div className="subscribeUpper">
                        <div>
                        <h3>Subscription</h3>
                       
                        </div>
                        <input type="search"  placeholder="Search for products"/>
                    </div>
                    <div className="mysubsribe-and-button" >
                        <div className="sub-and-history">
                        <p className="mySubscription">My Subscription</p>
                        <p className="subhistory">Subscription History</p>
                        </div>
                        <button onClick={(()=>{history.push("/productcategory")})} className="subSCRIPTION-pluslogo"><PlusLogo/><p>ADD SUBSCRIPTION</p></button>
                        </div>
                        <div className="sub-below">
                        <div className="pie-subdcribe">
                            <div className="pieInner">
                            <PieChart month={ansDate}/>
                            </div>
                        </div>
                        <div className="card-and-activity">
                            <div className="card-in-subscribe">
                            <div className="cardImage-subscribe">
                   
                   <div className="cardImage-acc-subscribe">
                       <p>Account Id</p>
                       <p className="medium-weight-dashboard">20210801</p>
                   </div>
                     <div className="cardImage-balance-subscribe">
                         <p className="medium-weight-dashboard">E-wallet Balance</p>
                         <p className="money-dashboard">NGN 134,457.56</p>
                     </div>
                 </div>
                    </div>
                 <div className="activity-subscribe">
                     <div className="activity-subscribe-header">
                         <p className="your-activity-sub">Your activity</p>
                         <p style={dates!=null ? {display:"none"}:{display:"flex"}}>Last subscription:{ dated}</p>
                     </div>
                     <div className="subscription-circle-and-text-div">
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">{total}</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle" id="subscription-circle-green">{activ}</div>
                             <p>Active </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle" id="subscription-circle-ash">{inactiv}</div>
                             <p>Inactive</p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle" id="subscription-circle-red">{expiredval}</div>
                             <p>Expired </p>
                                 <p>subscriptions</p>
                         </div>
                         
                     </div>
                 </div>
                           
                        </div>
                        </div>
                        <hr className="sub-divider-line"/>
                        <div className="sub-below-second">
                            <h3 className="allSub">All Subscriptions</h3>
                            <td>
                                <th>Products</th>
                                <th>Date Subscribed</th>
                                <th>Expiry date</th>
                                <th>Auto renewal</th>
                                <th>Status</th>
                                <th>Billing cycle</th>
                                <th></th>
                            </td>
                            {content=arr.map((val,index)=>{
            cats=val.subCategory
            catg=val.category
            itemAmt=val.amount
            itemImg=val.productImg
            itemExp=val.dateExpired
            itemStatus=val.subscriptionStatus
            let colours={}
             console.log(cats +"" + catg+""+itemImg)
            if(itemStatus=="Active"){
                colours={coloritem:"#17AD37"}
            }
            if(itemStatus=="Inactive"){
                colours={coloritem:"rgba(3,6,64,30%"}
            }
            if(itemStatus=="Expired"){
                colours={coloritem:"#E40C0C"}
            }

           return <div  className="catresult-sub">
            <tr className="Product-and-Pname" style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>
             
                 


           
            <p>{cats}</p></tr> 
            <tr>{val.dateSubscribed}</tr>
        <tr><p style={{color:"rgba(51,51,51,50%"}}>{val.dateExpired}</p></tr>
       
        <tr>{val.autoRenew}</tr>
       {/* <tr style={itemStatus=="Inactive"? {color:"rgba(3,64,6,30%)"} :null} >{itemStatus}</tr> */}
       <tr style={{color:colours.coloritem}}  >{itemStatus}</tr>
       <tr>{val.billingCycle}</tr>
       
        <tr className="editprof" 
        // ><p onClick={()=>{stat=="Inactive"? Inactive(val) : Active()}}style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
        ><p onClick={()=>{if(val.subscriptionStatus=="Inactive"){Inactivey(val,index)}
        // if(itemStatus=="Active") { Active(val,index) }}
        if(val.subscriptionStatus=="Active") { Active(val,index) } 
        if(val.subscriptionStatus=="Expired") { Expired(val,index) }}
        }style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
        
        <div className="binDiv" onClick={(()=>{handledelete(index)})} style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
        </tr>
        
       </div>

        })
    }
     
                            
                        </div>
                </div>
                <div></div>

         
        </DashFrame>
        </div>
        <div className="subscribemobilescreen">
            <MobileDash/>
            <h3 className="sub-mobile-header">Subscriptions</h3>
            <input type="search" placeholder="Search for products"/>
            <div className="subscribemobilescreen-inner">
            <div className="subscribemobilescreen-second">
                <p>My Subscriptions</p>
                <button>ADD SUBSCRIPTION</button>

            </div>
            <div className="sub-mobile-card">
                <Mobilecard/>
            </div>
            </div>
            <div>
                PIE
            </div>
            {/* <div> */}
            <div className="activity-subscribe">
                     <div className="activity-subscribe-header">
                         <p>Your activity</p>
                         <p>Last subscription:30th October 2021</p>
                     </div>
                     <div className="subscription-circle-and-text-div">
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                         <div className="subscription-circle-and-text">
                             <div className="subscription-circle">10</div>
                             <p>Total </p>
                                 <p>subscriptions</p>
                         </div>
                     </div>
                 </div>
                 {/* </div> */}
            <div></div>
        </div>
        </div>

     )


}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor,subarray}})=>({
 
    presentcolor,
    subarray
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Subscription)