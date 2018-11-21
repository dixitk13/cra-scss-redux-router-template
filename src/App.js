import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Page from "./Page";
import ProtectRoute from "./protectRoute";

const mapStateToProps = state => {
  // template: not using as of now
  return {
    flag: false
  };
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ProtectRoute
            flag={this.props.flag}
            exact
            path="/test"
            component={Page}
          />
          <Route exact path="/page" component={Page} />
          <Route path="*" component={Page} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  {}
)(App);
