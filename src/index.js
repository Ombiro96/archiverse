import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
// import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(
  <>
    <Header />
    <Main />
    <Footer />
    {/* <App/> */}
  </>
);