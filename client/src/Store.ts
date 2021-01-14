import isLogged from "./reducers/isLogged";
import Token from "./reducers/Token";
import SetPersonal from "./reducers/SetPersonal";
import { combineReducers } from "redux";

const CombReducers = combineReducers({
  isLogged,
  Token,
  SetPersonal,
});

export default CombReducers;
