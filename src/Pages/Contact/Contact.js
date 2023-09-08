import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import mail from "../../Asset/MailImg.png";
import phone from "../../Asset/PhoneImg.png";
import "../Contact/Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact">
        <Navbar
          aboutstyle={{ textDecoration: "none" }}
          privacystyle={{ textDecoration: "none" }}
        />

        <div className="contACTContainer">
          <div className="upper-contain-contact">
            <h2 className="contactHEader">We are here to help</h2>
            <p className="header-text">
              Contact us if you have any questions about our company or
              products. We will try to provide an answer within a few days
            </p>
            <div className="content-inner">
              <div className="content-inner-left">
                <div className="content-inner-contact">
                  <h3>Our Contact Information</h3>
                  <p className="fillUp">
                    Fill up the form and our team will get in touch and we 'll
                    be happy to assist you
                  </p>
                  <span className="content-inner-left-phone">
                    <img src={phone} alt="phoneImg" /> <p>+234800 123 5976</p>
                  </span>
                  <span className="content-inner-left-mail">
                    {" "}
                    <img src={mail} alt="mailImage" /> <p>support@flex.com</p>
                  </span>
                </div>
                <div className="contact-icons">
                  <FaTwitter className="contactICONS" />
                  <FaFacebookF className="contactICONS" />
                  <FaInstagram className="contactICONS" />
                </div>
              </div>
              <div className="content-inner-right">
                <h3 className="mobile-contact-text">Send us a message</h3>
                <div className="input-content-right">
                  <div className="input-label">
                    <label>Full name*</label>
                    <input type="text" placeholder="Enter your full name" />
                  </div>
                  <div className="input-label">
                    <label>Email*</label>
                    <input type="text" placeholder="you@example.com" />
                  </div>
                  <div className="input-label">
                    <label>Subject*</label>
                    <input type="text" placeholder="Enter subject here" />
                  </div>
                  <div className="input-label">
                    <label>Message*</label>
                    <input type="text" placeholder="How can we help you ?" />
                  </div>
                </div>
                <button>SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Contact;
