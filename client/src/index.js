import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Drizzle, generateStore } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";
import Board from "./contracts/Board.json";

const options = {
  contracts: [Board],
  web3: { fallback: { url: "ws://127.0.0.1:7545" } },
};
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
