// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Webcam from "./Webcam";
import "./App.css";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/screenshot" element={<Webcam />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
