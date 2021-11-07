import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import { useHistory } from 'react-router-dom';
import Box from '../../Components/Box/Box';
import '../Product/Product.css'

function Product({presentcolor,headercolor}){
    const history=useHistory()
    useEffect(()=>{
        headercolor({ dashheadercolor:"purple"})
                    
       
     },[])
return(
    <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
       <div className="inner-body-product">
                        <div className="second-line-product">
                            <h2>WELCOME TO FLEX</h2>
                            <input type="search"/>
                        </div>
                        <hr className="welcome-divider-product"/>
                        <div className="third-line-product">
                            <div className="third-line-product-upper"><h3>Overview</h3></div>
                            <div className="third-line-product-inner">
                                <div className="third-line-product-content">
                                   
                            <p className="acc-summ-product" onClick={(()=>{history.push("/Dashboard")})}>Account summary</p>
                            
                           
                            <div className="product-and-line">
                            <div><p onClick={(()=>{history.push("/Product")})}>Products</p></div>
                            
                            
                            <div className="account-line-product"></div>
                            </div>
                            </div>
                            <button onClick={(()=>{history.push("/productcategory")})}>ADD SUBSCRIPTION</button>
                            </div>
                            <hr className="welcome-divider-product"/>
                            <div className="fourth-line-product-categ">
                               <h2>PRODUCT CATEGORY</h2>
                               <div className="productCat">
                                  <Box/>
                                  <Box/>
                                  <Box/>
                                  <Box/>
                                  <Box/>
                               </div>
                            </div>
                            <div className="fourth-line-product-categ">
                               <h2>RECCOMMENDED FOR YOU</h2>
                               <div className="productCat">
                               <Box className="contentBox"/>
                                  <Box/>
                                  <Box/>
                                  <Box/>
                                  <Box/>

                               </div>
                               <div className="productCat">
                               <Box/>
                                  <Box/>
                                  <Box/>
                                  <Box/>
                                  <Box/>
                               </div>
                               </div>
                        </div>
                        </div>
         
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

export default connect(mapstatetoprops,MapDispatchToProps) (Product)