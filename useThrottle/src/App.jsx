import { useEffect, useState } from "react";
import "./App.css";
import useThrottle from "./hooks/useThrottle";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttledHandleResize = useThrottle(handleResize,5000);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);
    return () => {
      window.addEventListener("resize", throttledHandleResize);
    };
  }, []);

  return (
    <>
      <h1>Window Size : {windowSize.width} * {windowSize.height}</h1>
    </>
  );
}

export default App;
