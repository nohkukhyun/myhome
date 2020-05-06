import { combineReducers } from "redux"
import testReducer from "./testReducer"
import github from "./githubReducer"

const rootReducer = combineReducers({
  testReducer,
  github,
})

export default rootReducer
