import React from "react";
import "./LoginOptions.css"


const LoginOptions = (props)=>{
    return<div className="LoginOptions"><div className="social-btns">
            <div className="btn google" onClick = {props.onGoogleSignIn}><i className="fab fa-google-plus-g" style={{
                paddingBottom : "17px"
            }}></i></div>
            <div className="btn twitter" onClick = {props.onTwitterSignIn}><i className="fab fa-twitter" style={{
                paddingBottom : "17px"
            }}></i></div>
    </div></div>
}


export default LoginOptions;