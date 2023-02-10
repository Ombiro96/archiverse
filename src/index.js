import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/home/landingPage";
import store from "./redux/store";
import Contacts from "./pages/contact us";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/index.css";
import "./css/header.css"

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    {/* <Contacts/> */}
    <LandingPage/>
    {/* <Contact/> */}
  </Provider>
);