import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App.js";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>
  , document.getElementById("root")
);