import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {ReactComponent as Success} from '../../Asset/Success-icon.svg'
import { headercolor } from '../../redux/flex/flex.actions';
import { editarray } from '../../redux/flex/flex.actions'
import axios from 'axios'
// import '../ Paymentsuccess/ Paymentsuccess.css'
import '../Walletsuccesspayment/Walletsuccesspayment.css'
import { FaSellsy } from 'react-icons/fa'
import { baseURL } from '../../domain'

function  Walletsuccesspayment ({subscription,editarray}){
    const history=useHistory()
    const[namearr,setNamearr]=useState([])
    const[itemTest,setItemTest]=useState([])
    let userDisplay=[]
     useEffect(()=>{
    //     headercolor({ dashinvitecolor:"purple"})
    let userId = JSON.parse(localStorage.getItem('userId')); 
    let clientIds = JSON.parse(localStorage.getItem('clientIds'));
    let userObject = JSON.parse(localStorage.getItem('userObject')); 
    let testObject = JSON.parse(localStorage.getItem('testObject'));  
    console.log(userId)    
    console.log(userObject)
    //dates
    var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date)
console.log(today)
localStorage.setItem('date', JSON.stringify(today))

var dt = new Date(date);
dt.setMonth( dt.getMonth() + 1 );
var future=dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();

let newObject={}
console.log(future)
userObject.dateExpired=future
userObject.dateSubscribed=date
    userObject.subscriptionStatus="Active"

    //testobject
//    let testObject={amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
//         billingCycle:subscription.billingCycle,category:"Entertainment",dateExpired:2021-11-9,dateSubscribed:2021-10-10,
//         subscriptionStatus:"Expired"}

//later
//     testObject.dateExpired="2021-11-09"
// testObject.dateSubscribed="2021-11-10"
//     testObject.subscriptionStatus="Expired"


    newObject.dateExpired=future
newObject.dateSubscribed=date
    newObject.subscriptionStatus="Active"

    //addition
    let resVal = JSON.parse(localStorage.getItem('checkObject'));
    console.log(resVal)
    if(resVal.Hidy!=""){
       
        
        axios.patch(`${baseURL}/users/subscription/${clientIds}`,newObject)
.then(res=>{
console.log(res)
localStorage.removeItem(clientIds)
// localStorage.removeItem(clientRes)
axios.get("https://subscription-management-tool.herokuapp.com/users/wallet")
    .then(res=>{
      
    //   console.log(res.data.data.data.balance)
      console.log(res.data.data.balance)
      let amtBalance=res.data.data.balance
    //   console.log(amtBalance)
      let userObject=JSON.parse(localStorage.getItem('userObject'))
      console.log(userObject.amount)
      let newBalance=(+amtBalance)-(+userObject.amount)
    //   setRealBalance((+amtBalance)-(+clientRes.amount))
      console.log(newBalance)
      let paramval={
          balance:newBalance
      }
      axios.patch("https://subscription-management-tool.herokuapp.com/users/wallet",paramval)
    .then(res=>{
        console.log(res)
    })
    })
    .catch((err)=>{
        console.log(err)
    })
// //history.push("/dashboard")

})

    }
    
    else{
        //let userObject={}
         axios.post(`${baseURL}/users/subscription/`,userObject)
      .then(res=>{
         
       console.log(res)
    //    localStorage.removeItem(clientRes)
    axios.get("https://subscription-management-tool.herokuapp.com/users/wallet")
    .then(res=>{
      
    //   console.log(res.data.data.data.balance)
      console.log(res.data.data.balance)
      let amtBalance=res.data.data.balance
    //   console.log(amtBalance)
      let userObject=JSON.parse(localStorage.getItem('userObject'))
      console.log(userObject.amount)
      let newBalance=(+amtBalance)-(+userObject.amount)
    //   setRealBalance((+amtBalance)-(+clientRes.amount))
      console.log(newBalance)
      let paramval={
          balance:newBalance
      }
      axios.patch("https://subscription-management-tool.herokuapp.com/users/wallet",paramval)
    .then(res=>{
        console.log(res)
    })
    })
    .catch((err)=>{
        console.log(err)
    })
     // // //history.push("/dashboard")
     })}

    //userarray
    let testarr=[]
    userDisplay = JSON.parse(localStorage.getItem('userDisplay'));  
    console.log(userDisplay)
    userDisplay.map((items)=>{
        testarr.push(items.subCategory)
        console.log(testarr)
        setItemTest(testarr)
    })
    console.log(testarr)
    console.log(itemTest)
    setNamearr(userDisplay)
    console.log()
    let test=""
    let clientRes=JSON.parse(localStorage.getItem('clientRes'))
    if(clientRes!=null){
   // if (clientIds!=null){
//     userDisplay.map((item,indx)=>{
//         test=item
//         console.log(item._id)
//         console.log(userObject.subCategory)
//         console.log(testarr)
// let ans=""
//        if(testarr[0]!=userObject.subCategory){
//             ans="Falsyy"
          
//         }
//         if(ans=="Falsyy"){
//             alert("none")
//         }
           
//         //     axios.post("https://subscription-management-tool.herokuapp.com/users/subscription/",userObject)
//         //  .then(res=>{
//         //      alert('new')
//         //   console.log(res)
//         //   localStorage.removeItem(clientRes)
//         // // // //history.push("/dashboard")
//         //  })
      


//         //}
//        else if(item._id==clientIds){
            
//              alert('lop')
        
//                     axios.patch(`https://subscription-management-tool.herokuapp.com/users/subscription/${clientIds}`,newObject)
//  .then(res=>{
//  console.log(res)
//  localStorage.removeItem(clientIds)
//  localStorage.removeItem(clientRes)
// // //history.push("/dashboard")

//  })
//      }

// //next

//     // if(item._id!=clientIds){axios.post("https://subscription-management-tool.herokuapp.com/users/subscription/",userObject)
//     // .then(res=>{
//     //     alert('new')
//     // console.log(res)
//     // //history.push("/dashboard")
//     // })}

//     else{
//         axios.post("https://subscription-management-tool.herokuapp.com/users/subscription/",newObject)
//      .then(res=>{
//          alert('new')
//       console.log(res)
//       localStorage.removeItem(clientRes)
//     // // //history.push("/dashboard")
//      })}

     
//     })
//}
    
console.log(test)




    }

   
   
       
     },[])
return(
    
        <div className="paymentsuccess">

            <div className="payment-inner">

              <Success/>
               <h3>PAYMENT SUCCESSFUL</h3>
               <Link to="/Dashboard" className="return-home">BACK TO HOME</Link>
               
            </div>
        </div>
         
 

)


}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
    //  headercolor:(item)=>dispatch(headercolor(item)),
     editarray:(item)=>dispatch(editarray(item))
 
 })
const mapstatetoprops=({flex:{presentcolor,editarray,subscription}})=>({
 
    
    editarray,
    subscription
   
   

}) 

export default connect(mapstatetoprops,MapDispatchToProps)  (Walletsuccesspayment)