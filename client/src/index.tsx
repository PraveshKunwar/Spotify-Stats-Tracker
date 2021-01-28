import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Redux initializations!
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import persistedReducer from "./Store";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("app-root-spotify-stats-tracker")
);
