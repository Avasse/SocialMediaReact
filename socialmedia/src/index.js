
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/store";

import './styles/main.scss'
import 'semantic-ui-css/semantic.min.css';

// By using <Provider />, the store will be made available for all the components in your application.

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root")
);