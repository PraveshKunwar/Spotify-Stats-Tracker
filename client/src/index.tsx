import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Redux initializations!
import { createStore } from "redux";
import { Provider } from "react-redux";
import CombReducers from "./Store";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(CombReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("app-root-spotify-stats-tracker")
);
