import React from "react";
import "./page.styles.scss";

export const PageView = ({ value, incrementAction, decreaseAction }) => {
  return (
    <div className="page-view-container">
      <div className="value">{value}</div>
      <div className="action-holder">
        <button onClick={incrementAction}>increment</button>
        <button onClick={decreaseAction}>decrease</button>
      </div>
    </div>
  );
};
export default PageView;
