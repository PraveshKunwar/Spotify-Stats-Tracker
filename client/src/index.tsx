import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Redux initializations!
import { createStore } from "redux";
import { Provider } from "react-redux";
import CombReducers from "./Store";
import { composeWithDevTools } from "redux-devtools-extension";
import islogged from "./reducers/isLogged";
const store = createStore(islogged, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("app-root-spotify-stats-tracker")
);

reportWebVitals();
