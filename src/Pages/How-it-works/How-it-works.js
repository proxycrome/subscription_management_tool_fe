import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import "../How-it-works/How-it-works.css";
import { connect } from "react-redux";
import { headercolor } from "../../redux/flex/flex.actions";
import { useEffect } from "react";
import splash from "../../Asset/splash.png";
import worknew from "../../Asset/worknew.png";
import splashsec from "../../Asset/splashsec.png";
import check from "../../Asset/check.png";
import iconDots from "../../Asset/Icon.png";

function HowWorks({ headercolor, presentcolor }) {
  //avgWordsPerSentence
  useEffect(() => {
    headercolor({ howcolor: "#9953FF" });
  }, []);
  console.log(presentcolor.howcolor);
  return (
    <div className="HowWorks">
      <Navbar
        howworks={{
          color: presentcolor.howcolor,
          paddingBottom: "0",
          marginBottom: "0",
        }}
        howlinestyle={{
          marginTop: "6px",
          paddingTop: "0",
          borderTop: "1px solid #6200f0",
          alignSelf: "start",
          width: "16px",
        }}
        aboutstyle={{ textDecoration: "none" }}
        privacystyle={{ textDecoration: "none" }}
      />
      <div className="howworks-innerS">
        <h2 className="work-header">
          We Focus on <span className="sep-H2">Structured</span> and Sustainable
          Subscription Management.
        </h2>
        <hr className="work-header-line" />
        <div className="works-and-image-original">
          <div className="works-outer">
            <div className="works-inner">
              <h2>
                "A Platform you can trust to give you seamless and stress-free
                experience all day everyday.”{" "}
              </h2>
              <p className="work-inner-p">
                You want to know how flex works? We’ve got you. Take a quick
                tour around Flex and see how it works. Sign up to get started!
              </p>
              <div className="works-image-first" id="extra-img">
                <img src={splash} />
              </div>
              <button>WATCH VIDEO</button>
            </div>
            {/* <button >WATCH VIDEO</button> */}
            <div className="works-image-first" id="extra-img-web">
              <img src={splash} />
            </div>
          </div>
        </div>
        <div className="works-and-image">
          <div className="works-outer">
            <div className="works-image-second">
              <img src={worknew} />
            </div>
            <div className="works-inner-second">
              <h2>Our Featured Functionalities</h2>
              <p>Here 're some of the features Flex has to offer.</p>
              <div className="functionality-inner">
                <div className="function-check-div">
                  <img src={check} />
                </div>
                <p>Making tools & Discounts and promos.</p>
              </div>
              <div className="functionality-inner">
                <div className="function-check-div">
                  <img src={check} />
                </div>
                <p>Flexible charging schemes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="works-and-image">
          <div className="works-outer">
            <div className="works-inner-second">
              <h2>Our Featured Functionalities</h2>
              <p>Here 're some of the features Flex has to offer.</p>
              <div className="functionality-inner">
                <div className="function-check-div">
                  <img src={check} />
                </div>
                <p>Managing telecommunication services.</p>
              </div>
              <div className="functionality-inner">
                <div className="function-check-div">
                  <img src={check} />
                </div>
                <p>Managing subscription services.</p>
              </div>
            </div>
            <div className="works-image-second">
              <img src={worknew} />
            </div>
          </div>
        </div>
        {/* <div className="works-and-image">
                <div className="works-outer">
                    <div className="works-inner">
                    <h2>Our Featured Functionalities</h2>
                       <p>Here 're some of the features Flex has to offer</p>
                       <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>
                       <div className="functionality-inner">
                           <div className="function-check-div"><img src={check}/></div>
                           <p>Making tools $ Discounts and promos</p>
                       </div>
                       
                    </div>
                    <div className="works-image"><img src={worknew}/></div>
                </div>
            </div> */}
        <div className="mobile-works-inner">
          <h2>Our Featured Functionalities</h2>
          <div className="mobile-work-img">
            <img src={worknew} />
          </div>
          <p>Here 're some of the features Flex has to offer</p>
          <div className="functionality-inner">
            <div className="function-check-div">
              <img src={check} />
            </div>
            <p>Making tools & Discounts and promos.</p>
          </div>
          <div className="functionality-inner">
            <div className="function-check-div">
              <img src={check} />
            </div>
            <p>Flexible charging schemes.</p>
          </div>
        </div>
        <div className="mobile-works-inner">
          <h2>Our Featured Functionalities</h2>
          <div className="mobile-work-img">
            <img src={worknew} />
          </div>
          <p>Here 're some of the features Flex has to offer</p>
          <div className="functionality-inner">
            <div className="function-check-div">
              <img src={check} />
            </div>
            <p>Managing telecommunication services.</p>
          </div>
          <div className="functionality-inner">
            <div className="function-check-div">
              <img src={check} />
            </div>
            <p>Managing subscription services.</p>
          </div>
        </div>
        <div className="works-lower">
          <p className="work-intro">A few reasons why you should join us!!!</p>
          <p className="work-intross">
            A few reasons why you should join us!!!
          </p>
          <div className="work-intro-show">
            <div className="works-lower-inner">
              <span>
                <i className="funct-Image-div">
                  <img src={iconDots} />
                </i>
                <h2>Collaboration</h2>

                <p>
                  Collaboration is the process of two or more people or
                  organizations working together to complete a task or achieve a
                  goal.
                </p>
              </span>
              <span>
                <i className="funct-Image-div">
                  <img src={iconDots} />
                </i>
                <h2>Transparency</h2>

                <p>
                  Transparency, as used in science is operating in such a way
                  that it is easy for others to see what actions are performed.
                </p>
              </span>
            </div>
            <div className="works-lower-inner">
              <span>
                <i className="funct-Image-div">
                  <img src={iconDots} />
                </i>
                <h2>Trust</h2>
                <p>
                  Trust will help us foster a positive and productive
                  environment that delivers value to our users and customers.
                </p>
              </span>
              <span>
                <i className="funct-Image-div">
                  <img src={iconDots} />
                </i>
                <h2>Integrity</h2>
                <p>
                  Integrity is the practice of showing a consistent and
                  uncompromising adherence to strong moral and ethical
                  principles.
                </p>
              </span>
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
export default connect(mapstatetoprops, MapDispatchToProps)(HowWorks);
