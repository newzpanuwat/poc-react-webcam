import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = useState("");
  const webcamRef: any = useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // var res = imageSrc.replace("data:image/jpeg;base64,", "");
    setImgSrc(imageSrc);
  }, [webcamRef]);
  const videoConstraints = {
    width: window.innerWidth / 1.5,
    height: window.innerHeight / 1.5,
    facingMode: "user",
  };
  return (
    <div id="root">
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture</button> <br />
      {imgSrc && <img src={imgSrc} />}
    </div>
  );
}

export default App;
