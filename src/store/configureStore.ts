import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middleWare: any = "";

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middleWare)
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

function configureStore() {
  const store = createStore(rootReducer, devTools);
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
