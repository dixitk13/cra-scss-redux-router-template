import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { incrementAction, decreaseAction } from "./actions";
import PageView from "./PageView";
const mapStateToProps = state => ({
  value: state.value
});

class Page extends PureComponent {
  render() {
    return <PageView {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  {
    incrementAction,
    decreaseAction
  }
)(Page);
