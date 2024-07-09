import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";
import Webcam from "./Webcam.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/screenshot" element={<Webcam />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
