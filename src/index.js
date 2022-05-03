import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import timerRunningReducer from "./redux-reducers/timerRunningReducer";
import sessionLengthReducer from "./redux-reducers/sessionLengthReducer";
import breakLengthReducer from "./redux-reducers/breakLengthReducer";
import timerTypeReducer from "./redux-reducers/timerTypeReducer";
import timerCounterReducer from "./redux-reducers/timerCounterReducer";

const rootReducer = combineReducers({
  timerRunning: timerRunningReducer,
  timerType: timerTypeReducer,
  timerCounter: timerCounterReducer,
  sessionLength: sessionLengthReducer,
  breakLength: breakLengthReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
