import * as actionTypes from "../actions/actionTypes";
const initialState = {
    savedRecipes : null,
    showAlert : false,
    alertType : "added"
}

const SaveRecipeReducer = (state = initialState ,action) =>{
    
    switch(action.type){
        case actionTypes.LOAD_SAVED_RECIPES :
            return{
                ...state, 
                savedRecipes : action.savedRecipes
            }
        case actionTypes.RECIPE_SAVED :
            return{
                ...state,
                showAlert : true,
                alertType : "added"
            }
        case actionTypes.RECIPE_EXISTS :
            return{
                ...state,
                showAlert : true,
                alertType : "exists"
            }
        case actionTypes.RECIPE_REMOVED :
            return{
                ...state,
                showAlert : true,
                alertType : "removed",
                savedRecipes : action.savedRecipes
            }
        case actionTypes.HIDE_ALERT :
            return{
                ...state,
                showAlert : false,
            }
        default : return state;
    }
}

export default SaveRecipeReducer;