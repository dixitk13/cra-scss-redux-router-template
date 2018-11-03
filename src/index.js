import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
import Page from "./Page";

const App = () => (
  <Provider store={configureStore()}>
    <Page />
  </Provider>
);

render(<App />, document.getElementById("root"));
