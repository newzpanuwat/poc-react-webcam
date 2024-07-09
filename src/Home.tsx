// import React, { useRef, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/screenshot");
  };

  return (
    <div id="root">
      <button onClick={handleClick}>
        <span>Take a photo</span>
      </button>
    </div>
  )
}

export default App;
