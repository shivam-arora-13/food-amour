import React, {Component} from "react";
import Homepage from "./containers/Homepage/Homepage";
import {Redirect, Route, Switch} from "react-router-dom";
import Dashboard from "./containers/dashboard/Dashboard";
import {connect} from "react-redux";

class App extends Component{

    render(){
            const routes =<Switch>
                <Route path = "/" exact component={Homepage}/>
            <Route path = "/dashboard" exact component={Dashboard}/>
            <Redirect to = "/dashboard"/>
            </Switch>
        return<div>
            {routes}
        </div>  
    }
}


const mapStateToProp = (state)=>{
    return {
        user : state.user.id
    }
}

export default connect(mapStateToProp)(App);
