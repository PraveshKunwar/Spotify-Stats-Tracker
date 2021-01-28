import isLogged from "./reducers/isLogged";
import Token from "./reducers/Token";
import SetPersonal from "./reducers/SetPersonal";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const CombReducers: object = combineReducers({
  isLogged,
  Token,
  SetPersonal,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, CombReducers);

export default persistedReducer;
