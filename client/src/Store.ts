import Token from "./reducers/Token";
import isLogged from "./reducers/isLogged";
import { combineReducers } from "redux";

const CombReducers = combineReducers({
  Token,
  isLogged,
});

export default CombReducers;
