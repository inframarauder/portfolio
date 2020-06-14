import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
//import App from "./App";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
