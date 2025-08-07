import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/index.css";

import store from "./app/store.js";
import App from "./app/App.jsx";

createRoot(document.getElementById("root")).render(
  /* <StrictMode>
    <App />
  </StrictMode> */
  <Provider store={store}>
    <App />
  </Provider>
);
