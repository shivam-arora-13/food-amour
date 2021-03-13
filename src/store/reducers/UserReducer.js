import * as actionTypes from "../actions/actionTypes";
const initialState = {
    name : null,
    token : null,
    id : null,
    image : null
}

const UserReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS : 
        console.log(action.user)
        return {
            ... state,
            ...action.user
        }
        case actionTypes.LOGOUT :
            return {
                name : null,
                token : null,
                id : null,
                image : null
            }
        default :
        return state;
    }
}

export default UserReducer;