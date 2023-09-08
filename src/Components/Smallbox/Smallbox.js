import React from "react";
import { ReactComponent as FlexLogo } from "../../Asset/LOGO FLEX.svg";
import { FaEye, FaEyeSlash, FaFacebookF, FaFacebook } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../Smallbox/Smallbox.css";

function Smallbox({ icon, name }) {
  return (
    <div className="smallboX">
      <div>
        <img src={icon} />
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Smallbox;
