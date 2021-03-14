import React from "react";
import { NavLink } from "react-router-dom";
import {
    Card, CardBody,
    CardTitle,
    Button
  } from 'reactstrap';
import "./RecipeCard.css";
  

const RecipeCard = (props)=>{
    return <div className="RecipeCard">
   <Card style={{
     height : "450px"
   }}>
    <CardBody>
      <CardTitle style={{
        height : "55px"
      }} tag="h5">{ props.title.length > 25 ? props.title.slice(0, 25) + "..." : props.title}</CardTitle>
      <hr/>
    </CardBody>
    <img width="100%" src={props.imageUrl} alt="Card image cap" />
    <CardBody>
      <center><NavLink to={"/recipe"}><Button className= "RCardButton" outline color="warning" onClick = {props.knowClicked} >Know Recipe</Button></NavLink><p></p>
      {!props.saved ? <Button outline color="success" className= "RCardButton" onClick = {props.saveRecipe} >Add To Saved</Button> :
      <NavLink to={"/savedRecipes"}><Button outline color="danger" className= "RCardButton" onClick = {props.deleteRecipe} >Remove From Saved</Button></NavLink>}</center>
    </CardBody>
  </Card>
</div>
}

export default RecipeCard;