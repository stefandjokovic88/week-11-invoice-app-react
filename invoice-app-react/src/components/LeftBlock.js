import React from 'react';
import logo from "../assets/logo.svg";
// import iconMoon from "../assets/icon-moon.svg";
import imageAvatar from "../assets/image-avatar.jpg";

export default function LeftBlock(props) {
    
    return (
        <div className="left-block">
            <div className="left-block-up">
                <div className="left-block-up-up">

                </div>
                <div className="left-block-up-down">

                </div>
            </div>
            <img src={logo} alt="logo" className="logo"/>
            <div className="left-block-down">
                <img src={props.modeImg} alt="icon-mode" className="icon-mode" onClick={props.darkMode}/>     
                <div className="avatar">
                    <img src={imageAvatar} alt="img-avatar" className="img-avatar"/>
                </div>
            </div> 
            
        </div>
    )
}
