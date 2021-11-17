import React, {useRef, useState} from 'react'
import axios from 'axios';
import {ReactComponent as FlexLogo} from '../../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import {Link, useParams, useHistory} from 'react-router-dom'
import DashFrame from '../../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../../redux/flex/flex.actions';
import placeHolderImage from '../../../Asset/avi.jpg'
import './Profile.css'

const Profile = ({presentcolor,headercolor}) => {
    const history = useHistory();
    const {id} = useParams;
    const [image, setImage] = useState();
    const [preview, setPreview] = useState("");
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        phone: "",
        photo: ""
    });
    const fileInputRef = useRef();

    const user = localStorage.getItem('user');
    const userStr = JSON.parse(user)
    

    const handleFormChanges = (event) => {
        event.preventDefault()
        event.stopPropagation()
        const file = event.target.files[0];
        if(file && file.type.substr(0,5) === "image"){
            setImage(file)
        }else{
            setImage(null)
        }
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    useEffect(() => {
        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image);
        }else{
            setPreview(null);
        }
    }, [image])

    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"}) 

    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        axios.patch(`https://subscription-management-tool.herokuapp.com/users/edit/${id}`, userData)
        .then(res => {
            
        })
    }

    return (
        <>
            <DashFrame dashSettingsStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section">
                    <div className="header">
                        <h3>Settings</h3>
                        <hr className="welcome-divider"/>
                    </div>
                    <div className="sub-header">
                        <Link to={`/settings/profile/${userStr.id}`} style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p>Profile</p></Link>
                        <Link to="/settings/notifications"><p>Notifications</p></Link>
                        <Link to="/settings/application"><p>Application</p></Link>
                        <Link to="/settings/payments"><p>Payments</p></Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inner-section">   
                            <div className="inner-left-section">
                                <div className="image-form">
                                    <div>
                                        <div className="profile-image">{preview ? (<img src={preview} width="150" height="150" style={{objectFit: "cover", borderRadius: "50%", border: "none"}}/>):(<img src={placeHolderImage} width="150" height="150" style={{borderRadius: "50%"}}/>)}</div>
                                        <span className="remove" onClick={() => {setImage(null)}}>Remove</span>
                                    </div>
                                    <div>
                                        <input type="file" name="photo" accept="image/*" ref={fileInputRef} onChange={handleFormChanges}/>
                                        <label for="file" className="image-input" onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef.current.click();
                                        }}><span>Browse</span></label>
                                        <span className="instruct">Maximum file size is 2GB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="inner-right-section">
                                <div className="user-form">
                                    <div className="user-info-form">
                                        <div className="middle-input">
                                            <input type="text" name="firstName" placeholder="First name" className="input-field" onChange={handleFormChanges}/>
                                            <input type="text" name="country" placeholder="Country" className="input-field" onChange={handleFormChanges}/>
                                            <span className="additional">Additional Information</span>
                                            <input type="number" name="phone" placeholder="Phone number" className="input-field" onChange={handleFormChanges}/>
                                        </div>
                                        <div className="right-input">
                                            <input type="text" name="lastName" placeholder="Last name" className="input-field" onChange={handleFormChanges}/>
                                            <input type="email" name="email" placeholder="Email address" className="input-field" onChange={handleFormChanges}/>
                                        </div>
                                    </div>
                                    <div className="btn-field">
                                        <button type="submit" className="submit-btn">APPLY</button>
                                        <button type="button" className="discard-btn" >DISCARD</button>
                                    </div>   
                                </div>
                            </div>    
                        </div>
                    </form>
                    
                </div>    
            </DashFrame> 
        </>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Profile)

