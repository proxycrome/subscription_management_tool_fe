import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import partner from "../../Asset/Partner-image.png";
import "../../Pages/Partners/Partners.css";
import { connect } from "react-redux";
import { headercolor } from "../../redux/flex/flex.actions";
import { useEffect } from "react";

function Partners({ headercolor, presentcolor }) {
  useEffect(() => {
    headercolor({ partcolor: "#9953FF" });
  }, []);
  console.log(presentcolor.partcolor);
  return (
    <div className="Partners">
      <Navbar
        partstyle={{ color: presentcolor.partcolor }}
        partnerlinestyle={{
          marginTop: "6px",
          paddingTop: "0",
          borderTop: "1px solid #6200f0",
          alignSelf: "start",
          width: "16px",
        }}
        aboutstyle={{ textDecoration: "none" }}
        privacystyle={{ textDecoration: "none" }}
      />
      <div className="partner-Inner">
        <div className="partner-sections">
          <div className="header-line-div">
            <h2 className="firstHeader">Learn more about our partners</h2>
            <div className="underline-partner"></div>
          </div>
          <div className="header-image">
            <img src={partner} />
          </div>
        </div>
        <div className="partner-second-section">
          <div className="partners-text">
            <h3>OUR PARTNERS</h3>
            <div className="design">
              <p>
                Let’s help each other grow just like subscriptions, partnerships
                are all about relationships. Join us at Flex today!
              </p>
            </div>
            {/* <h2>"Partner integrations made easy"</h2> */}
            <h4>"Partner integrations made simple"</h4>
          </div>
          <div className="partner-right-text">
            <p className="paragraph-top">
              {" "}
              Flex is a fast-growing billing and automation software developer
              with worldwide presence. We offer a complete product stack for
              telecom and digital service providers to maximize revenue and
              level up their customer service.
            </p>
            <p>
              Choose the right integrations to drive frictionless workflows and
              long-lasting relationships. We are proud to have acquired the best
              IT engineers and developers for creating market-winning products
              and providing excellent support and service.
            </p>
          </div>
        </div>
        <div className="partner-input">
          <p className="ready">Ready to be our partner?</p>
          <div className="partner-input-area">
            <div className="Partner-areas">
              <div className="partner-input-class">
                <label>Full name* </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                />
              </div>
              <div className="partner-input-class">
                <label>Contact email* </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="Partner-areas">
              <div className="partner-input-class">
                <label>Subject*</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject here"
                />
              </div>
              <div className="partner-input-class">
                <label>Resume* </label>
                <div className="chooseFilE">
                  <input type="up" name="fullName" placeholder="Choose file " />
                  <button>
                    Choose<span id="filePdf"> file.pdf</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="partner-extra">
              <p className="tellUs">Tell us a bit about you*</p>
              <textarea className="textarea" placeholder="Let us know" />
              <p className="submit-agree">
                By submitting this form you agree to our terms and conditions
                and our Privacy Policy
              </p>
              <button>APPLY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const MapDispatchToProps = (dispatch) => ({
  //const userinput= {[items]:value}
  //signin:(item)=> dispatch(signin(item)),

  headercolor: (item) => dispatch(headercolor(item)),
});
const mapstatetoprops = ({ flex: { presentcolor } }) => ({
  presentcolor,
});

export default connect(mapstatetoprops, MapDispatchToProps)(Partners);
