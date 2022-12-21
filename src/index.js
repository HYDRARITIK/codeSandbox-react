import React from "react";
import ReactDOM from "react-dom";

var customStyle = {
  color: "red",
  fontSize: "40px"
};

ReactDOM.render(
  <>
    <h1
      style={{
        color: "blue",
        fontSize: "50px"
      }}
    >
      Hello World!
    </h1>

    <p style={customStyle}>sawdee kahao happy now</p>
  </>,
  document.getElementById("root")
);
