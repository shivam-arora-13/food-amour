import * as actionTypes from "./actionTypes";
import firebase from "firebase/app"
import {googleProvider, twitterProvider} from "../../Auth/FirebaseSetup";

export const onGoogleSignInFail = ()=>{}

export const verifyLoggedIn = ()=>{
  return (dispatch)=>{
  const userName = localStorage.getItem("name");
  if(userName){
    const user = {
      name : userName,
      id : localStorage.getItem("id"),
      token : localStorage.getItem("token"),
      image : localStorage.getItem("image")
    }
    dispatch({type : actionTypes.LOGIN_SUCCESS, user : user})
  }}
}

export const onGoogleSignIn = ()=>{
    return(dispatch)=>{
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    const user = {
      name : result.additionalUserInfo.profile.name,
      id : result.additionalUserInfo.profile.id,
      token : credential.accessToken,
      image : result.additionalUserInfo.profile.picture
    }
    localStorage.setItem("name", user.name);
    localStorage.setItem("id", user.id);
    localStorage.setItem("token", user.token);
    localStorage.setItem("image", user.image);

    

    dispatch({type : actionTypes.LOGIN_SUCCESS, user : user});
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });
}
}

export const onTwitterSignIn = ()=>{
    return(dispatch)=>{
        firebase
  .auth()
  .signInWithPopup(twitterProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var credential = result.credential;
    const user = {
      name : result.additionalUserInfo.profile.name,
      id : result.additionalUserInfo.profile.id.toString(),
      token : credential.accessToken,
      image : result.additionalUserInfo.profile.profile_image_url
    }
    localStorage.setItem("name", user.name);
    localStorage.setItem("id", user.id);
    localStorage.setItem("token", user.token);
    localStorage.setItem("image", user.image);

    dispatch({type : actionTypes.LOGIN_SUCCESS, user : user});
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
}

export const logout = () =>{
  return (dispatch)=>{
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("image");
    dispatch({type : actionTypes.LOGOUT})
  }
  
}