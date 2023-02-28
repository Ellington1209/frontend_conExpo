import { combineReducers } from "redux";
import authReducer from './Auth.reducer';
import loadingReducer from "./loading.reducer";
import registerReducer from "./register.reducer";



const rootReducer = combineReducers({
    authReducer,
    loadingReducer,
    registerReducer
    
})

export default rootReducer;