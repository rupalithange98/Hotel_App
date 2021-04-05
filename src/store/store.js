import usersReducer from "../reducer/userReducer";
import {createStore,combineReducers} from 'redux'

let rootReducers=combineReducers({
    userData:usersReducer
})

let store=createStore(rootReducers);

store.subscribe(()=>{
    console.log("dispatch data:",store.getState());
})

export default store;