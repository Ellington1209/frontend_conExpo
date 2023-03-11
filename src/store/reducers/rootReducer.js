import { combineReducers } from "redux";
import authReducer from "./Auth.reducer";
import loadingReducer from "./loading.reducer";
import registerReducer from "./register.reducer";
import notifyReducer from "./notify.reducer";
import alertReducer from "./alert.reducer";

const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  notifyReducer,
  registerReducer,
  alertReducer,
});

export default rootReducer;
