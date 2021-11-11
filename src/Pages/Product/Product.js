import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import { useHistory } from 'react-router-dom';
import Box from '../../Components/Box/Box';
import MobileDash from '../../Components/MobileDash/MobileDash'
import Netflix from '../../Asset/Netflix.png';
import  AdobeLogo from '../../Asset/Adobe.png';
import  Utilities from '../../Asset/Utilities icon.png';
import  Showmax from '../../Asset/Showmax.png';
import  Playstation from '../../Asset/Playstation.png';
import UdemyLogo from '../../Asset/Udemy.png';
import Microsoft from '../../Asset/Microsoft.png';
import Canva from '../../Asset/Canva.png';
import Education from '../../Asset/education.png';
import Entertainment from '../../Asset/Entertainment.png';
import YoutubeLogo from '../../Asset/Youtube.png';
import Productivity from '../../Asset/Productivity icon.png';
import InsuranceLogo from '../../Asset/Insurance icon.png';
import Ikedc from '../../Asset/Ikedc.png';
import Gotv from '../../Asset/GOTV.png';
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
                                  <Box icon={Entertainment} name="Entertainment"/>
                                  <Box icon={Utilities} name="Utilities"/>
                                  <Box icon={Productivity} name="Productivity"/>
                                  <Box icon={Education} name="Education"/>
                                  <Box icon={InsuranceLogo} name="Insurance"/>
                               </div>
                            
                            </div>
                            <div className="fifth-line-product-categ">
                               <h2>RECOMMENDED FOR YOU</h2>
                           
                               <div className="productCat">
                               <Box icon={Gotv}  className="contentBox" />
                                  <Box  icon={Netflix} />
                                 
                                  <Box icon={YoutubeLogo} />
                                  <Box icon={UdemyLogo}  />
                                  <Box icon={AdobeLogo}  />
                                  
                               </div>
                               <div className="productCat">
                                  
                               <Box icon={Playstation}/>
                                  <Box icon={Microsoft}/>
                                  <Box icon={Canva}/>
                                  <Box icon={Ikedc}/>
                                  <Box icon={Showmax}/>
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
                               <Box icon={Entertainment} name="Entertainment"/>
                                  <Box icon={Utilities} name="Utilities"/>
                                  <Box icon={Productivity} name="Productivity"/>
                                  <Box icon={Education} name="Education"/>
                                  <Box icon={InsuranceLogo} name="Insurance"/>
                               </div>
                            </div>
                            </div>

                            <div className="fifth-line-product-categ">
                               <h2>RECCOMMENDED FOR YOU</h2>
                               <div className="productCat">
                               <Box icon={Gotv}  className="contentBox" />
                                  <Box  icon={Netflix} />
                                 
                                  <Box icon={YoutubeLogo} />
                                  <Box icon={UdemyLogo}  />
                                  <Box icon={AdobeLogo}  />

                               {/* </div>
                               <div className="productCat"> */}
                               <Box icon={Playstation}/>
                                  <Box icon={Microsoft}/>
                                  <Box icon={Canva}/>
                                  <Box icon={Ikedc}/>
                                  <Box icon={Showmax}/>
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