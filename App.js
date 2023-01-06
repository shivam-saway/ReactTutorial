import React from "react";
import ReactDOM  from "react-dom/client"; 

const headingOne = React.createElement(
  "h1",
  {
    id: "titleOne",
  },
  "Heading One"
);

const headingTwo = React.createElement(
  "h2",
  {
    id: "titleTwo",
  },
  "Heading Two"
);

const Container = React.createElement(
  "div",
  {
    id: "container",
  },
  [headingOne, headingTwo]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Container);
