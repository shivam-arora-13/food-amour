import * as actionTypes from "./actionTypes";
import axios from "axios";

export const loadRecipes = (query)=>{
    return (dispatch)=>{
    if(query!== ""){
        axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=540df7b66de64739b0b81d43cd4434ba&number=25&query="+query)
        .then((res)=>{
            dispatch({type : actionTypes.LOAD_RECIPES, recipes : [...res.data.results]})
        })
    .catch((err)=>{

    });}else{
        dispatch({type : actionTypes.LOAD_RECIPES, recipes : []})
    }
}
}

export const loadAnalyzedRecipe = (queryRecipe)=>{
    return (dispatch)=>{
        const requestURl = "https://api.spoonacular.com/recipes/"+ queryRecipe.id +"/analyzedInstructions?apiKey=540df7b66de64739b0b81d43cd4434ba";
        axios.get(requestURl)
        .then((res)=>{
            dispatch({
                type : actionTypes.LOAD_ANALYZED_RECIPE,
                recipeInfo : queryRecipe,
                analyzedRecipe : res.data[0]
            })
        })
        .catch((err)=>{
        })
    }
}