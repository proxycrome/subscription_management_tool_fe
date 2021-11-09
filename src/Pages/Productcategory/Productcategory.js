import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import Smallbox from '../../Components/Smallbox/Smallbox';
import { useHistory } from 'react-router-dom';
import MobileDash from '../../Components/MobileDash/MobileDash'
import '../Productcategory/Productcategory.css'

function Productcategory({presentcolor,headercolor}){
    const history=useHistory()
    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200F0"})
                    
       
     },[])
return(
    <div className="productcategory-All">
        <div className="productcategory-web">
    <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
        <div className="product-categ-container">
            <div className="listAndHeader" >
                <div className="product-category-inner">
                    <h3>Product Category</h3>
                    <input type="search"/>
                </div>
                <div className="listOfproduct">
                    <p id="entertainment">Entertainment</p>
                    <p>Utilities</p>
                    <p>Productivity</p>
                    <p>Education</p>
                    <p>Insurance</p>
                </div>
            </div>
            <hr/>
            <div className="product-category-second">
                <h3>ProductList</h3>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button onClick={(()=>{history.push("/addsub")})}>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button>ADD </button>
                    </div>
                </div>
            </div>
        </div>
         
    </DashFrame>
    </div>
    <div className="productcategory-mobile">
    <MobileDash/>
    <div className="product-category-inner">
                    <h3>Product Category</h3>
                    <input type="search"/>
                </div>
                <div className="inner-product-catg-All">
                <div className="listOfproduct">
                    <p id="entertainment">Entertainment</p>
                    <p>Utilities</p>
                    <p>Productivity</p>
                    <p>Education</p>
                    <p>Insurance</p>
                </div>

    <div className="product-category-second">
                <h3>ProductList</h3>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button onClick={(()=>{history.push("/addsub")})}>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button>ADD </button>
                    </div>
                </div>
                <div className="product-category-second-list">
                    <div className="product-category-second-inner">
                        <div className="list-specification">
                            <div><Smallbox/></div>
                            <p>Gotv</p>
                        </div>
                        <button>ADD </button>
                    </div>
                    </div>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Productcategory)