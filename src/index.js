import React from "react";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
import App from "./App";

const BrowserRouterApp = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
export default withRouter(BrowserRouterApp);

render(<BrowserRouterApp />, document.getElementById("root"));
