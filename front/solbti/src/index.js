import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "common/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousels from "componenet/Carousels";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "home/Home";
import Layout from "common/Layout";
import Graphcomponent from "mypage/Graphcomponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Layout>
      {/* <Routes> */}
      {/* <Route path="/" element={<App />} />
        <Route path="/mypage/1" element={<Graphcomponent></Graphcomponent>} /> */}
      <App />
      {/* </Routes> */}
    </Layout>
  </BrowserRouter>
);
reportWebVitals();
