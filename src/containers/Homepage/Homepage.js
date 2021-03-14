import React, {Component} from "react";
import homepageBG from "../../assets/images/homepageBG.jpg"
import "./Homepage.css";
import LoginOptions from "../../components/LoginOptions/LoginOptions";
import {connect} from "react-redux";
import * as action from "../../store/actions/UserActions";
import { Redirect } from "react-router-dom";

class Homepage extends Component{
    componentDidMount(){
        this.props.verifyLoggedIn()
    }
    render(){
        let homepage = <div style={{
            zIndex : "2",
            backgroundImage : `url(${homepageBG})`,
               }} className="HomePage" >
                    
                    <div className="Element">
                        <h1 className="Title">Food Amour</h1>
                    </div>
                
                <div><LoginOptions
                onGoogleSignIn = {this.props.onGoogleSignIn}
                onTwitterSignIn = {this.props.onTwitterSignIn}/></div>
        </div>
        if(this.props.userId){
            homepage = <Redirect to="/dashboard"/>
        }
        return   <>{homepage}</>
    }
}

const mapStateToProps = (state)=>{
    return {
      name : state.user.name,
      userId : state.user.id
    }
  }

const mapDispatchToProps = (dispatch)=>{
    return{
        onGoogleSignIn : ()=> dispatch(action.onGoogleSignIn()),
        onTwitterSignIn : ()=> dispatch(action.onTwitterSignIn()),
        verifyLoggedIn : ()=> dispatch(action.verifyLoggedIn())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
