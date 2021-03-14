import * as actionTypes from "./actionTypes";
import axios from "axios";

export const loadSavedRecipes = (userId)=>{
    return (dispatch)=>{
        const requestURl = 'https://food-amour-1378-default-rtdb.firebaseio.com/savedRecipes.json?orderBy="userId"&equalTo="'+userId+'"';
        axios.get(requestURl)
        .then((res)=>{
            let savedRecipes = [];
            for(let key in res.data){
                savedRecipes.push({...res.data[key], objectKey : key})
            }
            dispatch({
                type : actionTypes.LOAD_SAVED_RECIPES,
                savedRecipes : savedRecipes
            })
        })
        .catch((err)=>{
        });
    }
}

export const saveRecipeInit = (userId, recipe)=>{
    return (dispatch)=>{

        const verifyURL = 'https://food-amour-1378-default-rtdb.firebaseio.com/savedRecipes.json?orderBy="userId"&equalTo="'+userId+'"';
        let flag = true;
        axios.get(verifyURL)
        .then((res)=>{
            for(let key in res.data){
                if(res.data[key]["id"]==recipe.id){
                    flag = false;
                    dispatch({type : actionTypes.RECIPE_EXISTS});
                }
            }
            if(flag){
                const requestURL = 'https://food-amour-1378-default-rtdb.firebaseio.com/savedRecipes.json';
    
            const saveRecipeObject = {
                userId : userId,
                ...recipe
            };
            axios.post(requestURL, saveRecipeObject)
            .then((res)=>{
                dispatch({type : actionTypes.RECIPE_SAVED})
            })
            .catch((err)=>{
                console.log(err)
            });
            }
        })
        
        
    }
}

export const removeSavedRecipe = (userId, recipe)=>{
    return (dispatch)=>{
        const requestURL = 'https://food-amour-1378-default-rtdb.firebaseio.com/savedRecipes/' + recipe.objectKey + '.json';
        axios.delete(requestURL)
        .then((res)=>{
            const requestURl = 'https://food-amour-1378-default-rtdb.firebaseio.com/savedRecipes.json?orderBy="userId"&equalTo="'+userId+'"';
        axios.get(requestURl)
        .then((res)=>{
            let savedRecipes = [];
            for(let key in res.data){
               
                savedRecipes.push({...res.data[key], objectKey : key})
            }
            dispatch({type : actionTypes.RECIPE_REMOVED, savedRecipes : savedRecipes})
        })

                
            })
       .catch(()=>{});
    }
}

export const hideAlert = ()=>{
    return {
        type : actionTypes.HIDE_ALERT
    }
}

