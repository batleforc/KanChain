import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Drizzle, generateStore } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";
import SimpleStorage from "./contracts/SimpleStorage.json";

const options = { contracts: [SimpleStorage] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <DrizzleContext.Provider drizzle={drizzle}>
        <App />
      </DrizzleContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
