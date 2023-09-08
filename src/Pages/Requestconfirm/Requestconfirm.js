import React from "react";
import Resetpassframecancel from "../../Components/Resetpassframecancel/Resetpassframecancel";
import { Link } from "react-router-dom";
import flexpng from "../../Asset/flexpng.png";
import { connect } from "react-redux";
import MobileDash from "../../Components/MobileDash/MobileDash";
import "../Requestconfirm/Requestconfirm.css";

function Requestconfirm({ newemail }) {
  return (
    <div className="total-confirm-request">
      <div className="web-reset-request">
        <Resetpassframecancel>
          <div className="Requestconfirm">
            <h1>REQUEST CONFIRMATION</h1>
            <p className="Requestconfirm-parag">
              A link has been sent to your email: {newemail.email} .
            </p>
            <button>CHECK MAIL</button>

            <p className="remember-request-pass">
              Remember your password{" "}
              <Link to="/signin" className="link-rem-request">
                Sign in
              </Link>
            </p>
          </div>
        </Resetpassframecancel>
      </div>
      <div className="mobilesignin">
        <div className="mobilesigninHeader">
          <img src={flexpng} style={{ width: "78px", height: "32px" }} />

          <h3>Stay connected always</h3>
        </div>
        <div className="signinmobile-inner-confirm">
          <div className="Requestconfirm">
            <h1>REQUEST CONFIRMATION</h1>
            <p className="Requestconfirm-parag">
              A link has been sent to your email: {newemail.email} .
            </p>
            <button>CHECK MAIL</button>

            <p className="remember-request-pass">
              Remember your password{" "}
              <Link to="/signin" className="link-rem-request">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapstatetoprops = ({ flex: { newemail } }) => ({
  newemail,
});

export default connect(mapstatetoprops)(Requestconfirm);
