import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import "./index.css";
import "./header.css"

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
);