import { combineReducers } from "redux";
import testReducer from "./testReducer";

const LOADING = "LOADING";

const rootReducer = combineReducers({
  testReducer,
});

export default rootReducer;
