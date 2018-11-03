import React from "react";

export const PageView = ({ value, incrementAction, decreaseAction }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={incrementAction}>increment</button>
      <button onClick={decreaseAction}>decrease</button>
    </div>
  );
};
export default PageView;
