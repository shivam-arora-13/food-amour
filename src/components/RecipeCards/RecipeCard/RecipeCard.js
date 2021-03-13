import React from "react";
import { NavLink } from "react-router-dom";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
    Button
  } from 'reactstrap';
import "./RecipeCard.css";
  

const RecipeCard = (props)=>{
    return <div className="RecipeCard">
   <Card style={{
     height : "400px"
   }}>
    <CardBody>
      <CardTitle tag="h5">{ props.title.length > 25 ? props.title.slice(0, 25) + "..." : props.title}</CardTitle>
      <hr/>
    </CardBody>
    <img width="100%" src={props.imageUrl} alt="Card image cap" />
    <CardBody>
      {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
      <center><NavLink to={"/recipe"}><Button outline color="warning" onClick = {props.knowClicked} >Know Recipe</Button></NavLink>
      {!props.saved ? <Button outline color="success" onClick = {props.saveRecipe} >Add To Saved</Button> :
      <NavLink to={"/savedRecipes"}><Button outline color="danger" onClick = {props.deleteRecipe} >Remove From Saved</Button></NavLink>}</center>
    </CardBody>
  </Card>
</div>
}

export default RecipeCard;