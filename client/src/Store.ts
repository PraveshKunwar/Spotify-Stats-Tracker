import isLogged from "./reducers/isLogged";
import { combineReducers } from "redux";

const CombReducers = combineReducers({
  isLogged,
});

export default CombReducers;
