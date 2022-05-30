import React from 'react';
import './cssfiles/Footer.css';
import {FaTwitter} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {IoLogoWhatsapp} from "react-icons/io"
import {MdOutlineCall} from "react-icons/md"
import {CgMail} from "react-icons/cg"




const Footer=()=>{
    return(
        <div className="foot">
            <div className="foot1">
            <h3 className="con">
                Connect to us on Social Media
            </h3>
            <li className="list">
                <a className="con-icon" href=""> <FaTwitter/></a>
                <a className="con-icon"  href=""> <AiFillInstagram/></a>
                <a className="con-icon"  href=""> <BsFacebook/></a>
                <a className="con-icon"  href=""> <AiFillLinkedin/></a>
                <a  className="con-icon" href=""> <IoLogoWhatsapp/></a>
            </li>
            </div>
            <div className="foot2">
                <div className="para"> 
                    <h2>ABOUT US</h2>
                    <p >
                        Our Foundation connects people with professionals 
                        to help overcome their psychogenic problems and promote
                        healthy mind and life . 
                    </p>
                </div>
                <div className="para2">
                    <h2>
                        CONTACT US 
                    </h2>
                    <div>
                        <p >
                        <MdOutlineCall className="icon3"/> 891....994
                        </p>
                        <p>
                        <CgMail className="icon3"/> reneefoundation@gmail.com
                        </p>
                    </div>
                </div>
                <div className="para3"> 

                    <div className="WrtSub">
                    <input  placeholder="Enter your Email" cols="70%" rows="1" className="write">
                    </input>
                    <button className="btn">Submit</button>
                    </div>

                    <p>
                    <a href=""><u>Need Help?</u></a>
                    <br/><br/>
                    <b >National HelpLine Numbers : 915-298-7821</b>
                    </p>

                    </div>
            </div>
        </div>
    )
}

export default Footer;
