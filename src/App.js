import React, {Component} from "react";
import Homepage from "./containers/Homepage/Homepage";
import {Route} from "react-router-dom";
import Dashboard from "./containers/dashboard/Dashboard";
import Recipe from "./containers/Recipe/Recipe";

class App extends Component{
    render(){
        return<div>
            <Route path = "/" exact component={Homepage}/>
            <Route path = "/dashboard" exact component={Dashboard}/>
        </div>  
    }
}

export default App;
