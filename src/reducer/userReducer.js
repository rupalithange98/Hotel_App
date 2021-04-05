import {ADD_USER,UPDATE_USER,DELETE_USER} from "../actions/types"

const usersReducer = (userData = {}, action) => {
    if (action.type === ADD_USER) {
        console.log('--------', action.userData)
        userData = action.userData;
        return userData
    }
    if (action.type === UPDATE_USER) {
        userData = Object.assign({}, action.userData)
    }
    return userData;
};


export default usersReducer;