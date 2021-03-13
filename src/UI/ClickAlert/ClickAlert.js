import React from "react";
import { Alert } from 'reactstrap';
import "./ClickAlert.css";

const ClickAlert = (props)=>{
    switch(props.type){
        case "added" :
            return <Alert  className="ClickAlert" color="success">
            RECIPE ADDED to your Saved Recipes
          </Alert>
    
    case "removed" :
      return <Alert className="ClickAlert" color="danger">
      RECIPE REMOVED from your Saved Recipes
      </Alert>
      case "exists" :
      return <Alert  className="ClickAlert" color="warning">
      RECIPE ALREADY EXISTS in your Saved Recipes
      </Alert>
    }
}

export default ClickAlert;