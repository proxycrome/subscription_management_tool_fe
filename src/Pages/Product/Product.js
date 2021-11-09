import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import { useHistory } from 'react-router-dom';
import Box from '../../Components/Box/Box';
import MobileDash from '../../Components/MobileDash/MobileDash'
import {ReactComponent as Netflix} from '../../Asset/Netflix.svg';
import{ReactComponent as GotvLogo} from '../../Asset/GOTV.svg'
import {ReactComponent as AdobeLogo} from '../../Asset/Adobe.svg';
import {ReactComponent as IkedcLogo} from '../../Asset/Ikedc.svg';

import {ReactComponent as UdemyLogo} from '../../Asset/LOGO FLEX.svg';
import {ReactComponent as YoutubeLogo} from '../../Asset/Youtube.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import {ReactComponent as InsuranceLogo} from '../../Asset/Insurance icon.svg';
import flexpng from '../../Asset/flexpng.png'
import '../Product/Product.css'

function Product({presentcolor,headercolor}){
    const history=useHistory()
    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200F0"})
                    
       
     },[])
return(
    <div className="productscreenAll">
    <div className="webproductScreen">
    <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
       <div className="inner-body-product">
                        <div className="second-line-product">
                            <h2>WELCOME TO FLEX</h2>
                            <input type="search" placeholder="Search for products"/>
                        </div>
                       
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
                            <button onClick={(()=>{history.push("/productcategory")})} className="addsub-product">ADD SUBSCRIPTION</button>
                            </div>
                          
                            <div className="fourth-line-product-categ">
                               <h2>PRODUCT CATEGORY</h2>
                               <div className="productCat">
                                  <Box icon={<GoogleLogo/>}/>
                                  <Box icon={<UdemyLogo/>}/>
                                  <Box icon={<InsuranceLogo/>}/>
                                  <Box/>
                                  <Box/>
                               </div>
                               <p><GoogleLogo/></p>
                            </div>
                            <div className="fifth-line-product-categ">
                               <h2>RECCOMMENDED FOR YOU</h2>
                           
                               <div className="productCat">
                               <Box  className="contentBox" />
                                  <Box  icon={`$<AdobeLogo/>`} name="adobe" />
                                 
                                  <Box />
                                  <Box icon={<GotvLogo/>} name="gotv" />
                                  <Box icon={"nnnnn"}  />
                                  <GotvLogo/>
                                  <adobeLogo/>
                                  <YoutubeLogo/>
                                  <YoutubeLogo/>
                                  <Netflix/>
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
    </div>
    <div className="MobileProductScreen">
        <MobileDash/>
        <h2 className="welcomeMobileScreen">WELCOME TO FLEX</h2>
        <input type="search " placeholder="Search for products"/>
        <div className="firstareaproductmobilescreen">
           <div className="overview-and-button-Mobile">
              <h3>Overview</h3>
              <button>ADD SUBSCRIPTION</button></div>
           <div className="acc-and-product-Mobile">
              <p>Account summary</p>
              
              <p className="product-line-product-mobile">Products</p>
           </div>
      
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
                            </div>

                            <div className="fifth-line-product-categ">
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