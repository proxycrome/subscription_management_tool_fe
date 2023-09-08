import React from "react";
import DashFrame from "../../Components/DashFrame/DashFrame";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { headercolor } from "../../redux/flex/flex.actions";
import Smallbox from "../Smallbox/Smallbox";
import "../Belowbox/Belowbox.css";
import { addsubs } from "../../redux/flex/flex.actions";
import { subarray } from "../../redux/flex/flex.actions";
import { addarray } from "../../redux/flex/flex.actions";
import { FaEye } from "react-icons/fa";

function Belowbox({
  presentcolor,
  headercolor,
  firstbutn,
  secondbutn,
  choice,
  cycle,
  noclick,
  firstclick,
  secondclick,
  icon,
  addsubs,
  subarray,
  addarray,
  subscription,
  product,
}) {
  // const{subval,setSubval}=useState({})
  // const[subscriptionval,setSubscriptionval]=useState({})

  const [autorenewal, setAutorenewal] = useState("Disabled");
  const [amount, setAmount] = useState("0.00");
  const [valChosen, setValChosen] = useState("");
  const [billingCycle, setBillingCycle] = useState("");
  const [selectpack, setSelectpack] = useState("");
  let selectindex;
  let result = product.filter((val, index) => {
    if (selectindex == index) {
      return val;
    }
  });

  useEffect(() => {
    headercolor({ dashinvitecolor: "purple" });
  }, []);
  let cont = "";
  let amt;
  let chosen = "";
  addsubs({ Renewal: autorenewal });
  function Changevalue(e) {
    chosen = e.target.value;

    let chosenindex;
    setValChosen(chosen);
    setSelectpack(e.target.value);
    let chosenResult = product.filter((value, indx) => {
      if (value.productName == chosen) {
        return chosen;
      }
    });
    let itemAmount = chosenResult.map((val, ind) => {
      amt = val.amount;
      return amt;
    });

    setAmount(amt);
    addsubs({ amount: amt });
    addsubs({ productName: e.target.value });
  }
  function Changecycle(e) {
    addsubs({ billingCycle: e.target.value });
    setBillingCycle(e.target.value);
  }
  return (
    <div className="belowbox">
      <div>
        <div className="belowbox-Header">
          <h3>Product Category</h3>
          <h3>ENTERTAINMENT</h3>
        </div>
        <div className="belowbox-inner-all">
          <div className="belowbox-inner">
            <Smallbox icon={icon} />
            <div className="below-categ-div">
              <div className="below-category-options">
                <p>Packages</p>
                <div className="selected-div-below">
                  <select
                    name="choice"
                    onChange={Changevalue}
                    className="select-placeholder-below"
                    id="selectlists-below"
                  >
                    <option value="country"></option>
                    {product.map((vals, index) => {
                      selectindex = index;

                      //    cont=
                      return (
                        <option key={index} value={vals.productName}>
                          {vals.productName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="below-category-options">
                <p>Amount</p>
                <p>NGN{amount}</p>
                {/* {  result=product.filter((vals,index)=>{
                      
                       selectindex==index
                        return(
                            <option key={index} value={vals}>{vals.productName}</option>
                        )
                    })}  */}
                {/* <input type="number" onChange={((e)=>{addsubs({Amount:e.target.value});console.log(e.target.value)})}/>
                        <p>package</p>
                        <input type="text" onChange={((e)=>{addsubs({Package:e.target.value})})}/> */}
                {/* <p>N2500.00</p> */}
              </div>
              <div className="below-category-options">
                <p>Billing Cycle</p>
                <div className="selected-div-below">
                  <select
                    name="cycle"
                    onChange={Changecycle}
                    className="select-placeholder-below"
                    id="selectlist-below"
                  >
                    <option value="country">{cycle}</option>
                    {/* {product.map((vals,index)=>{
                      
                      console.log(product) */}
                    {/* return( */}
                    <option value="Monthly">Monthly</option>
                    {/* )
                   })}  */}
                  </select>
                </div>
              </div>
              <div className="below-category-options">
                <p>Auto Renewal</p>
                <div className="below-enable">
                  <p>{autorenewal}</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onClick={() => {
                        if (autorenewal == "Disabled") {
                          setAutorenewal("Enabled");
                        } else {
                          setAutorenewal("Disabled");
                        }
                        //   let option=autorenewal
                        //   console.log(option)
                        //   setAutorenewal("Enabled");
                        addsubs({ Renew: autorenewal });
                        console.log(autorenewal);
                      }}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="below-butn">
            <button
              className="first-belowbutton"
              onClick={() => {
                if (selectpack != "" && billingCycle != "") {
                  firstclick();
                }
              }}
            >
              {firstbutn}
            </button>
            {/* <button className="second-belowbutton" onClick={(()=>{choice=="" ? noclick(): secondclick()})} >{secondbutn}</button> */}
            <button
              className="second-belowbutton"
              onClick={() => {
                if (billingCycle != "" && valChosen != "") {
                  secondclick();
                }
              }}
            >
              {secondbutn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const MapDispatchToProps = (dispatch) => ({
  //const userinput= {[items]:value}
  //signin:(item)=> dispatch(signin(item)),

  headercolor: (item) => dispatch(headercolor(item)),
  addsubs: (item) => dispatch(addsubs(item)),
  //  subarray:(item)=>dispatch(addsubs(item)),
  addarray: (item) => dispatch(addarray(item)),
});
const mapstatetoprops = ({
  flex: { presentcolor, subscription, subarray },
}) => ({
  presentcolor,
  subscription,
  subarray,
});

export default connect(mapstatetoprops, MapDispatchToProps)(Belowbox);
