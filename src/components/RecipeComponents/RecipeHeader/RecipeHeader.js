import React from "react";
import "./RecipeHeader.css";

const RecipeHeader = (props)=>{
    return <div className="RecipeHeader">
          <h1 className="RecipeHeaderTitle">{props.title}</h1>
          <img src={props.imgUrl} className="RecipeHeaderImg"></img>
        </div>
}

export default RecipeHeader;