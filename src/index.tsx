import * as React from "react";
import * as ReactDOM from "react-dom";
import Comments from "./components/comments/comments";

ReactDOM.render(
  <Comments key={process.env.AUTH_KEY} issueNumber={9} theme="" />,
  document.getElementById("app")
);
